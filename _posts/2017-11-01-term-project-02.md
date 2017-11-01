---
layout: post
title: "Term-Project: 개발일지 02"
categories:
  - Term-Project
tags:
  - term-project
  - unity
---

이번에는 Stage1을 튜토리얼로 만들고 낙하데미지를 구현하였다. 그리고 GameManager에 필요한 것들을 거의 다 넣었다.

우선 튜토리얼이다. 도움말은 UI로 Canvas에 띄우지 않고 World에 넣었다.

<img src="{{ site.url }}/images/gravity_06.PNG" alt="gravity_06">

<img src="{{ site.url }}/images/gravity_07.PNG" alt="gravity_07">

<img src="{{ site.url }}/images/gravity_08.PNG" alt="gravity_08">


낙하 데미지 구하는 부분에서는 의외로 시간이 많이 걸렸다.
```
Void OnCollisionEnter(Collision coll){
    if(coll.relativeVelocity.magnitude > 20f)
    {
        m_CurrentHealth -= coll.relativeVelocity.magnitude
    }
}
```
보통 낙하 데미지는 이렇게 충격량을 구하면 간단했지만 CharacterController는 지면과는 OnCollisionEnter로 충돌체크가 되지 않아 할 수가 없었다. (왜 OnCollisionEnter가 안되는지 모르겠다;;;)

그래서 충돌체크는 OnControllerColliderHit로 확인하고 낙하데미지는 일정시간동안의 속도의 변화량으로 했다.
```
private void OnControllerColliderHit(ControllerColliderHit hit)
{
    if (m_Controller.velocity.magnitude > 25f && !m_isDropping)
    {
        m_Velocity = m_Controller.velocity;
        StartCoroutine(DropCheck());
    }
}
```
플레이어가 어딘가에 부딛혔을 때 실행되는 함수이다. 여기서 일정 속도 이상일때 데미지를 계산하게 하였다. 그리고 데미지 계산 중에 충돌이 일어나 데미지가 또 들어오면 안 되므로 m_isDropping이라는 bool변수를 사용해 조건을 제한했다.
```
IEnumerator DropCheck()
{
    m_isDropping = true;
    yield return new WaitForSeconds(0.1f);
    if((m_Velocity - m_Controller.velocity).magnitude > 5f)
    {
        m_CurrentHealth -= (m_Velocity - m_Controller.velocity).magnitude;
    }
    UpdateUI();
    m_isDropping = false;
}
```
데미지를 계산하는 coroutine함수다. 보통 물체의 충돌은 0.1초안에 이루어진다하여 충돌 시간을 0.1초로 가정하고 계산하였다.

GameManager에 관해서는 지난 번에 만들었던 것을 수정했는데, 생각해보니 게임 실행중에 GameLoop() coroutine을 돌릴 필요가 없을 것 같아 지웠고 대부분은 메시지를 받아 함수가 실행되도록 했다. 이번에 추가한 함수는 Clear(), StageReset(), StageEnding()이다.
```
public void Clear()
{
    PlayInfo.stageNum++;
    StartCoroutine(StageEnding());
}
```
```
public void StageReset()
{
    SceneManager.LoadScene(SceneManager.GetActiveScene().name);
}
```
```
IEnumerator StageEnding()
{
    m_MessageText.text = "Clear";
    yield return m_EndWait;

    SceneManager.LoadScene("Stage" + PlayInfo.stageNum.ToString());
}
```

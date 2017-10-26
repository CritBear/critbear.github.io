---
layout: post
title: "Term-Project: 개발일지 01"
categories:
  - Term-Project_Gravity
tags:
  - term-project
  - unity
---

시험공부를 안 할 수는 없어서 잠시 손을 놓고 있다가 조금 만들어 보았다. 이번에 추가한 것은 StartRoom과 GameManager의 일부와 GoalArea 이펙트정도다.

<img src="{{ site.url }}/images/gravity_04.PNG" alt="gravity_04">

우선은 StartRoom이다. 밖의 배경은 Stage마다 다르게 만들 것이지만 시작하는 공간은 이 방을 유지할 것이며 게임의 기반이 만들어진 후에는 이곳에 아이콘들을 띄워 상점역할도 하게 될 것이다. StartRoom의 모델은 에셋 스토어에서 [3D Scifi Kit Starter Kit](https://www.assetstore.unity3d.com/en/#!/content/92152)을 가져와 사용했다.

<img src="{{ site.url }}/images/gravity_05.PNG" alt="gravity_05">

Stage가 시작하기 전 3초동안 Stage Number와 Stage구조나 GoalArea의 위치를 보여준다. GameManager는 아직 완성하지 못했지만 시작 부분은 다음과 같다.

```
private void Start()
{
    m_StartWait = new WaitForSeconds(m_StartDelay);
    StartCoroutine(GameStarting());
}

IEnumerator GameStarting()
{
    yield return m_StartWait;

    SetPlayer();
    m_MessageText.text = string.Empty;
    StartCoroutine(GameLoop());
}
```

그리고 Update는 성능을 많이 잡아먹는다고 들어서 이제 게임을 만들 때는 Update보다는 최대한 Coroutine을 활용하려 한다. 익숙하지 않은 개념이라 복잡하게 느껴지기는 하지만 Coroutine을 잘 활용하면 코드가 정말 깔끔해진다. 

뒷쪽에 보이는 고리 모양의 이펙트가 GoalArea이다. 고리 모양이 포토샵으로 텍스처 만들기도 쉽고 파티클 시스템으로 다양하게 활용하기도 좋아 자주 쓰고 있다.

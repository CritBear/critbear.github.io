---
layout: post
title: "Term-Project: 개발일지 00"
categories:
  - Term-Project_Gravity
tags:
  - term-project
  - unity
---


중력 방향을 바꾸기에 가장 쉬운 방법은
```
Physics.gravity = new Vector3(0,1,0)
```
이었지만 유니티 내장 에셋인 FPS Controller가 중력 방향을 바꾸면 잘 움직이지 않았으며 이게 평면에서만을 위한 것인지 시점을 회전시키기 힘들었다.

FPS Controller를 직접 만드는 것은 귀찮았고 기존만큼 자연스러울 것 같지가 않아 Player를 제외한 Scene안의 모든 오브젝트를 Player를 중심으로 회전시키기로 했다.

사방으로 회전시키면 좋겠지만 키가 많으면 불편할 것 같아 q로 180도 e로 90도 회전만 하기로 했다.
```
void OnChangeGravityUp()
{
    if (Input.GetKeyDown("q"))
    {
        StartCoroutine(GravityZero());
        StartCoroutine(RotateWorld(new Vector3(-1, 0, 0),180));
    }
}
```
RotateAround를 Slerp형태로 회전시키기 위해서 RotateWorld는 이렇게 만들었다.
```
IEnumerator RotateWorld(Vector3 axis, float rotateAmount)
{
    float step = 0.0f;
    float rate = 1.0f / rotateTime;
    float smoothStep = 0.0f;
    float lastStep = 0.0f;

    while(step < 1.0f)
    {
        step += Time.deltaTime * rate;
        smoothStep = Mathf.SmoothStep(0.0f, 1.0f, step);
        world.transform.RotateAround(transform.position, axis, rotateAmount * (smoothStep - lastStep));
        lastStep = smoothStep;
        yield return null;
    }
    if (step > 1.0) transform.RotateAround(transform.position, axis, rotateAmount * (1.0f - lastStep));
}
```
> [easing a rotation of ROTATE AROUND](http://answers.unity3d.com/questions/29110/easing-a-rotation-of-rotate-around.html) 참조

그리고 회전시킬 때 실수를 줄일 수 있게 시각효과를 추가하기로 했다. RayCast를 사용해 90도 회전하고 착지할 부분에 파란색, 180도 회전하고 착지할 부분에 초록색 고리 모양의 이펙트가 실행되도록 했다. 이 기능은 x를 눌러 On/Off할 수 있다.

<img src="{{ site.url }}/images/gravity_03.PNG" alt="gravity_03">

Stage구상을 위해 Unity Asset Store에서 건물 3D model들과 도로, 기지 건설 키트를 받아왔다.

앞으로 구현할 것은 StartRoom, GameManager, PlayerHealth, GoalArea, Stage 정도 있고 생각나면 더 만들지도 모르겠다.

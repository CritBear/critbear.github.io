---
layout: category
title: Term-Project_Gravity
---

# **Gravity**
> 사용도구 : Unity
> 목표 : 1인칭 어드벤처 퍼즐 게임

<img src="{{ site.url }}/images/gravity_01.PNG" alt="gravity_01">

중력의 방향을 바꾸면서 정해진 지점까지 가야 클리어되는 스테이지 형식의 게임을 만들 예정이다.

현재 Unity에 내장되어 있는 FPS Controller를 사용하고 있는데 기존 중력방향 이외는 잘 적용되지 않아서 Player를 제외한 나머지를 GameObject "World"의 하위로 넣고 World를 회전시켜 중력 변화를 표현하고 있다.

이동은 마우스와 w, a, s, d를 사용하고, 중력 방향 변화는 q로 180도, e로 90도 회전시킨다. 90도 회전은 네 방향으로 나누어 Player가 보고 있는 방향으로 회전시킨다.

```
void OnChangeGravityForward()
{
    if (Input.GetKeyDown("e"))
    {
        StartCoroutine(GravityZero());
        if (transform.eulerAngles.y > 45 && transform.eulerAngles.y <= 135)
        {
            StartCoroutine(RotateWorld(new Vector3(0, 0, -1), 90));
        }
        else if(transform.eulerAngles.y > 135 && transform.eulerAngles.y <= 225)
        {
            StartCoroutine(RotateWorld(new Vector3(-1, 0, 0), 90));
        }
        else if (transform.eulerAngles.y > 225 && transform.eulerAngles.y <= 275)
        {
            StartCoroutine(RotateWorld(new Vector3(0, 0, 1), 90));
        }
        else
        {
            StartCoroutine(RotateWorld(new Vector3(1, 0, 0), 90));
        }
    }
}
```

Unity Asset Store에서 skybox와 건물, 환경 3D model을 활용할 예정이다.

---
layout: post
title: "Term-Project: 개발일지 04"
categories:
  - Term-Project
tags:
  - term-project
  - unity
---

데미지를 입었을 때 숫자가 아닌 이미지로 알 수 있도록 UI를 수정했다.

피가 묻어있는 모습을 넣고 싶었지만, 에셋 스토어에 있는 것들은 전부 유료였다.

유튜브에도 이것에 관한 튜토리얼이 없어서 그냥 포토샵으로 만들어보었다.

<img src="{{ site.url }}/images/gravity_11.PNG" alt="gravity_11">
마우스로 대충 그려보았는데, 실수로 레이어 안 만들고 배경에다 그냥 그려버렸다;;;

<img src="{{ site.url }}/images/gravity_12.PNG" alt="gravity_12">
앞에꺼 지우고 화면 비율도 맞춰서 다시 그렸다.

<img src="{{ site.url }}/images/gravity_13.PNG" alt="gravity_13">
게임에 적용한 모습이다. 마우스로 그린거라 미흡하긴 하지만 제대로 적용되었다.

남은 HP에 따라 달라지도록 두 개를 더 그렸다.

<img src="{{ site.url }}/images/gravity_14.PNG" alt="gravity_14">
HP가 100~70일때, 이미지의 health는 디버깅을 위해 넣은 걸로 상관없다.

<img src="{{ site.url }}/images/gravity_15.PNG" alt="gravity_15">
Hp가 70~30일때

위의 세 이미지는 다음과 같이 HP에 따라 알파값을 조절하여 표시했다.
<img src="{{ site.url }}/images/gravity_16.PNG" alt="gravity_16">
주의할 점은 Inspector창의 알파값은 0~255지만 동적으로 바꿀 때는 0~1이다.

다음은 데미지를 받고 2초 후에 체력을 회복시켜주는 함수다.
```
IEnumerator HealthGeneration()
{
    m_isCalmDown++;
    yield return new WaitForSeconds(2f);
    m_isCalmDown--;
    
    while(m_isCalmDown <= 0 && m_CurrentHealth < 100)
    {
        m_CurrentHealth += 0.5f;
        UpdateUI();
        yield return new WaitForSeconds(0.1f);
    }
}
```

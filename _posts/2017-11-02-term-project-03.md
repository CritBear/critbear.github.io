---
layout: post
title: "Term-Project: 개발일지 03"
categories:
  - Term-Project
tags:
  - term-project
  - unity
---

낙하 데미지를 수정하였다.

기존 낙하 데미지는 y좌표의 속력의 변화량에 비례하여 데미지를 계산하였지만, 게임에서는 같은 높이에서 떨어지더라도 중간에 멈췄다 떨어질 때 더 많은 데미지를 입었다. 따라서 Mathf.Clamp(속력의 변화량 - 한계데미지, 0, 100)^2 를 낙하 데미지로 수정하였다. Mathf.Clamp(float value, float min, float max)는 value가 min과 max의 범위를 벗어나지 않게 해 주는 함수다.
```
m_DropDamage = Mathf.Pow(Mathf.Clamp(m_DropVelocity - Mathf.Abs(m_Controller.velocity.y) - 30f, 0, 100), 2);
m_CurrentHealth -= m_DropDamage;
```

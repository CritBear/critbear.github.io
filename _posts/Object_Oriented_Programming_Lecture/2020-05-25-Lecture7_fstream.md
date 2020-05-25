---
layout: post
title: "Object Oriented Programming #7"
categories:
  - SandBox
tags:
  - Note
---

# Lecture #7. fstream

### 1. 라이브러리

```cpp
#include <fstream>
```

### 2. 선언

```cpp
ifstream fin; // ifstream 변수로 선언된 fin의 이름은 바꿀 수 있다.
ofstream fout;
```

### 3. 파일 열기

```cpp
fin.open("input.txt");
fout.open("output.txt"); // 덮어쓰기
//fout.open("example.txt", ios::app); // 이어쓰기
```

### 4. 입력

```cpp
// 버그를 막기 위한 안전장치
if(!fin) // fin이 파일을 열지 못하거나, 끝까지 읽고 나면 fin=false
	exit(100); // 프로그램 강제종료, 숫자는 상관 없다.

// 파일에서 읽어온 것을 콘솔에 출력하는 코드
string s;
while(true) {
	fin >> s; // 기본적으로 한 단어씩 입력받으며, 구분은 Enter나 Space로
	if(!fin) // 파일을 끝까지 읽으면 그만하기
		break;
	cout << s << endl;
}
```

```cpp
// 위 코드와 비슷하지만, 아래 코드는 한 줄씩 입력받아 출력한다.
while(getline(fin, s)) { // Enter친 곳까지 한 줄을 s에 저장
	cout << s << endl;
}
```

### 5. 출력

```cpp
// cout처럼 쓰면 된다.
fout << s << endl;
```

### 6. 마무리

```cpp
fin.close()
fout.close()
```
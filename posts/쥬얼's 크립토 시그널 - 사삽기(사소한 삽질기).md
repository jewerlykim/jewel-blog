---
title: 쥬얼's 크립토 시그널 - 사삽기(사소한 삽질기)

date: '2023-04-01'

thumbnail: https://user-images.githubusercontent.com/75651834/229263118-74cbbad1-2741-4d26-8555-c9649e797c52.png

category: '기술'

tags: 'Jewel's Crypto Signal, shoveling machine, small shoveling machine, Bitcoin dominance, CoinGecko API, Upbit API, pyupbit library, cryptocurrency market, market bullishness, market bearishness, buy_market_order, sell_market_order, insufficient funds, investment responsibility, 주얼의 크립토 신호, 삽질 기계, 작은 삽질 기계, 비트코인 지배력, 코인게코 API, 업비트 API, 파이업비트 라이브러리, 암호화폐 시장, 시장 상승세, 시장 하락세, 매수_시장_주문, 매도_시장_주문, 자금 부족, 투자 책임'
---

# 쥬얼's 크립토 시그널 - 사삽기(사소한 삽질기)

## 상황

현재 쥬얼's 크립토 시그널은 많은 개선과정을 거치고 있다. 자잘한 출력 UI 수정부터 로직까지 고쳐지고 있다. 아무래도 금전과 관련되어있다보니 더 신경을 많이 쓰게 되는 것 같다. 최근에는 비트코인 지배력 지표를 넣었다. 비트코인이 전체 암호화폐 시장에서 어느 정도 비중을 차지하는지에 대한 지표이고, 이 지표는 직접 계산하는 것이 아니라 [코인게코](https://www.coingecko.com/ko) 의 api를 통해 받아오고 있다. 나는 비트코인 지배력 지표를 대략적인 시장의 약세, 강세의 지표로 보고있다. 실제로는 더 많은 지표로 판단해야하니 앞으로 업데이트 될 예정이다.

그리고 telegram에 알림 지표를 줄 때, 지표를 활용해 매수・매도를 하고 있다. 당연히 내 개인 자산만 매도 가능하다. 매수 진입점 지표가 생각보다 빠르게 등장해서 벌써 매수 금액이 적지 않다. 그리고 오늘 새벽부터는 매도가 자동으로 진행되었어야 했는데 아침에 확인해보니 매도가 전혀 진행되지 않아 버그(?)를 고치고 오는 길이다.

---

업비트 api는 api 키에 ip를 등록해서 특정 ip에서만 api 요청이 가능하도록 되어있다. 그래서 실제 알림을 보내는 서버 ip 말고 로컬 ip를 추가등록하고 test를 시작했다. 간단히 내가 가지고 있는 코인중 TON 코인으로 1만원을 팔아보려고 했다.

```python
print(upbit.sell_market_order('KRW-TON', 10000))
```

그런데 다음과 같은 에러가 등장했다.

```curl
InsufficientFundsAsk
```

팔려고 하는 자금이 부족하다는 뜻인것 같은데, 분명 TON 코인은 1만원 이상 보유하고 있었다.

---

다음과 같은 의심을 했다. 혹시 10000으로 들어간 파라미터가 1만원이 아니라 1만 TON으로 입력되는 것 일까? 그래서 3 TON 코인을 팔아보려고 했다.

```python
print(upbit.sell_market_order('KRW-TON', 3))
```

그러자

```curl
{'uuid': 'UUID', 'side': 'ask', 'ord_type': 'market', 'state': 'wait', 'market': 'KRW-TON', 'created_at': '2023-04-01T11:32:28.01402+09:00', 'volume': '3', 'remaining_volume': '3', 'reserved_fee': '0', 'remaining_fee': '0', 'paid_fee': '0', 'locked': '3', 'executed_volume': '0', 'trades_count': 0}
```

정확히 3 TON 코인을 팔아버렸다.

왜 난 파라미터를 won으로 생각하고 있었을까?

---

매수하는 코드는 다음과 같다.

```python
print(upbit.buy_market_order('KRW-TON', amount_in_krw))
```

매도와 이름을 뺀 method의 시그니쳐가 같다. 그리고 매수코드는 코인이 아닌 원 단위로 매수를 하게 되어있다. 실제 원으로 매수가 동작한다.

그래서 당연히 매도도 원 단위로 생각했던 것 같다.

---

pyupbit라는 라이브러리를 쓰고 있는데 라이브러리 공식 docs는 무슨 일인지 내용이 많이 사라져있어서 해당 내용을 찾아볼 수 없었다. 그래서 찾아보니 [pyupbit깃헙](https://github.com/sharebook-kr/pyupbit) 에는 내용이 나와있기는 하다. pyupbit는 upbit에서 제공하는 api를 wrapping해서 쓰기 편하게 만들어준 라이브러리인듯 하다. upbit에서 공식으로 지원하는 라이브러리도 아닌 듯하다.

누군가 편하게 쓰기 좋으라고 만들어준 라이브러리니 고마운 마음을 가져야한다. 이 사건은 남탓이 아니라, 매수는 되었으니 매도도 당연히 될 것이라고 편하게 생각한 나에 대한 반성을 하게 만들어줬다. 만약, 원으로 따졌을 때, coin 개수만큼 자본이 충분했으면 원치 않게 매도를 하게 될테니 금전적 손실이 있었을 수도 있을 것이다. 그렇게 안된 것이 천만다행이다.

라이브러리는 항상 그렇지만 100프로 정답은 될 수 없다. 한번 더 의심해보는 의식이 있지 않으면 어떤 결과를 초래할 지 알 수 없고, 책임도 사용한 본인이 져야한다.

---

### 마치며

쥬얼's 크립토 시그널 : [초대링크](https://t.me/+hGmnkVX7xTowNWY1)

- 절대 리딩방 아닙니다.
- 투자는 본인의 판단하에 이루어져야 합니다.

모두들 화이팅입니다.

이렇게 4월에 첫글을 마칩니다.

오늘도 글을 읽어주셔서 감사합니다.

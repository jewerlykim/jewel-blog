---
title: 쥬얼's 크립토 시그널 시작!(Upbit API, Python Script, AWS EC2, telegram Bot)

date: '2023-03-28'

thumbnail: https://cdn.discordapp.com/attachments/997271616234995782/1088720195499069480/Jewel_Unlock_the_Future_of_Crypto_Signal_Notifications_and_Deve_ba1d5499-8835-473a-a0e0-29465a83b7f0.png

category: '기술'
---

# **쥬얼's 크립토 시그널 시작!**

---

❗️주의

- 이 글은 Upbit API, Python Script, AWS EC2, telegram Bot 를 사용한 프로그램 개발 방법에 대한 안내입니다.
- 어느정도 숙련된 개발자들을 위한 글입니다.
- 해당 글은 코인 투자 권유를 목적으로 하지 않습니다.

---

### ✏️ 들어가며

안녕하세요, 쥬얼입니다. 오늘은 여러분들과 함께 Upbit API를 활용한 코인 정보 수집 및 분석, 그리고 이를 통해 코인 시장의 신호를 전달하는 프로그램을 개발해볼까 합니다. 본 글에서는 간단한 Python 스크립트를 작성하고, AWS EC2에서 서버를 구동하여 일정 시간마다 알림을 전송하는 Telegram 봇을 만들어보겠습니다. 그럼 시작해볼까요?

---

## 1. Upbit API를 활용한 코인 정보 수집

우리는 오늘 pyupbit라는 파이썬 용 upbit SDK를 사용할 예정입니다. 그러기 위해서는 먼저 SDK를 다운로드합니다.

```
pip3 install pyupbit
```

그리고 나서는 내 계정에 맞게 pyupbit 인스턴스를 생성해줄거에요.

```python
import pyupbit

access = 'access-token'
secret = 'secret-token'

upbit = pyupbit.Upbit(access, secret) # upbit 인스턴스
```

이렇게 하고 나면 가격 확인 및 주문 등 여러가지 기능을 포함한 upbit 인스턴스를 얻을 수 있습니다!

[upbit API guide](https://upbit.com/service_center/open_api_guide)
링크에서 upbit API access, secret 토큰을 얻을 수 있습니다. 절대 토큰을 탈취 당하지 않도록 주의하도록 해요.

### 필요한 코인 정보(가격, 거래량, 등락률 등)을 추출하는 코드 작성

_'check_investment_indicator'_ 라는 메소드를 만들어주기로 해요. 이 메소드는 여러가지 제가 사용하는 지표들을 호출해서 현재 지표에 대한 평가 및 출력 등을 도와주는 메소드입니다.

그 전에 pandas module이 있는지 확인하셔야 합니다. 없다면 다운로드합시다.

```
pip3 install pandas
```

```python
import  pandas  as  pd
telegram_message = ""
# 모든 코인에 대해서 확인하지 않고, 지정한 코인만 확인합니다.
interest_coins = {'BTC', 'ETH', 'LINK', 'NEAR', 'MATIC', 'SOL', 'XRP', 'APT', 'DOGE', 'TON', 'TRX'}

# 사실상 메인이 되는 함수
def  check_investment_indicator():
	for  coin  in  interest_coins:
		ticker = f"KRW-{coin}"
		ohlcv_data = pyupbit.get_ohlcv(ticker, interval="day", count=100)
		rsi_buy, rsi_sell = calculate_rsi(ohlcv_data, ticker) # RSI를 계산하는 custom method
		# 등등 다른 지표들

		buy_count = sum(buy_signals)
		if  buy_count >= 2:
			telegram_message += f"\n🔔🟢 다중시그널: 매수 시그널 (Buy Count: {buy_count})"
			buy_coin(ticker)
		time.sleep(1)
```

여러가지 지표들이 있지만 코드 길이상 여기서는 RSI 지표만 예시로 넣었습니다.

관심 코인을 순회하면서 ohlcv_data에 하루 차이(interval='day')의 코인 종가 데이터들을 수집합니다. 그후 각 지표들에게 데이터로 제공해주고, 시그널이 매수 시그널인지, 매도 시그널인지 받습니다.

그 이후 글로벌 변수 _telegram_message_ 에 정보를 넣어줍니다.

저는 현재 4개의 지표들을 사용하고 있는데 그 중 2개 이상일 때는 코인을 자동으로 사도록 해두었습니다.

1초간 쉬는 이유는 pyupbit api 조회 제한 때문에 그렇습니다.

### main 함수

main 함수에서 python 스크립트를 실행하면 위의 함수를 실행하도록 작성해줍니다.

```python
if __name__=="__main__":
	check_investment_indicator()
```

이로써 기본 골격은 완성입니다!

---

## 2. Python 서버를 EC2에 업로드

### EC2 인스턴스 생성 및 설정

ec2는 저에게 가장 익숙한 ubuntu로 했습니다. 가장 최신 버전의 ubuntu에 프리티어로 인스턴스를 생성했습니다.(낮은 사양의 컴퓨터로도 가능합니다.)

### Python 코드를 EC2 인스턴스에 업로드하는 방법

github을 통해 작성한 python 스크립트를 받아왔습니다.

### Python 가상환경 설정 및 필요한 모듈 설치 방법

당연히 ubuntu에 python 환경은 모두 설치해야합니다.

---

## 3. Telegram 봇으로 매 시간 알림 전송

### Telegram 봇 생성 방법

텔레그램 봇 생성하는 방법이 생각보다 특이합니다.
telegram 앱 들어가서 search 부분에서 _BotFather_ 를 검색합니다.
![스크린샷 2023-03-28 오후 5 18 10](https://user-images.githubusercontent.com/75651834/228173813-433332b2-4e16-4330-b521-1a6049a3fb3b.png)
그리고 명령어중 /newbot을 입력하고, 쭉 시키는대로 따라가다 보면 bot이 생성됩니다!

### 봇 토큰

봇 토큰은 BotFather가 마지막 단계에

```
Use this token to access the HTTP API
```

라는 말 이후에 있습니다.

### 채널 ID

저는 제가 만든 채널에 메시지를 보내기 위해서 채널 ID가 필요했습니다. web telegram에 들어가서 로그인을 합니다. 그 이후에 본인이 만든 채널을 클릭한 뒤 url을 보면, path 마지막에 #-000000000 처럼 생긴 숫자가 있습니다. 여기서 -100 + (나온 숫자) 를 하게 되면 이게 채널의 ID가 되겠습니다.

예를 들어,
url이 다음과 같다면

```
https://web.telegram.org/z/#-123456789
```

채널 ID는 다음과 같습니다.

```
-100123456789
```

하하... 신기하죠?

### Python에서 Telegram 봇을 활용하여 메시지를 보내는 코드 작성

이제 대망의 python에서 telegram 봇을 통해서 채널에 메시지를 보내보겠습니다!

```python
import  requests

telegram_bot_token = "bot-token"
telegram_chat_ids = ["-100123456789"]
telegram_message = ""

def  send_telegram_message(message):
	print("send message:",message)
	for  telegram_chat_id  in  telegram_chat_ids:
		url = f"https://api.telegram.org/bot{telegram_bot_token}/sendMessage?chat_id={telegram_chat_id}&text={message}"
		requests.get(url)

send_telegram_message(telegram_message)
```

이렇게 send_telegram_message 메소드에서 url get 요청을 통해 메시지를 보낼 수 있습니다.

---

### 4. 채널 설명

### 사용하는 지표 및 추적하고 있는 코인

현재는 총 5개의 지표를 사용하고 있습니다.

1. RSI
2. MACD 오실레이터
3. 볼린저밴드
4. 스토캐스틱
5. 전날 종가 대비 5프로 이상 등락 코인

추적하고 있는 코인은 다음과 같습니다.

```
'BTC', 'ETH', 'LINK', 'NEAR', 'MATIC', 'SOL', 'XRP', 'APT', 'DOGE', 'TON', 'TRX'
```

### 채널 설명 및 책임 주의 안내

채널 발전을 위한 어떠한 조언이라도 감사하게 받아드립니다. 기타 문의도 받고 있습니다. 문의를 통해 지표 추가나 코인 추가가 가능합니다.

채널은 투자를 도와주는 대표적인 지표들을 알림 형태로 보내주는 채널일 뿐, 투자 권유를 하는 채널이 아닙니다. 또한, 투자에 관한 일체의 책임을 지지 않습니다.

### Telegram 초대 링크

관심이 있는 분은 아래 링크를 통해 들어오실 수 있습니다.
(초대링크)[https://t.me/+hGmnkVX7xTowNWY1]

---

## 마치며

제 여유자금을 지표를 확인하면서 자동으로 투자하기 위해 만든 봇입니다. 회사를 다니면서 계속 만들어보고 싶었던 봇인데 드디어 만들게 되었습니다.

오늘도 긴 글을 봐주셔서 감사합니다. 많은 관심 부탁드립니다.


Celem tego zadania jest stworzenie koszyka i procesu zamawiania w sklepie internetowym przy użyciu **React** wraz z **TypeScript** oraz połączenie się z udostępnionym API do zarządzania produktami, zamówieniami i koszykiem.

#### Zadanie

1. Lista produktów
	1. Wyświetlenie kart z produktami zawierającymi zdjęcia, nazwę i cenę.
	2. Filtrowanie produktów po nazwie produktu i wybranej grupie produktu.
	3. Sortowanie produktów po dacie dodania produktu `↑/↓` lub cenie `↑/↓` (domyślnie po dacie dodania).
2. Strona produktu
	1. Wyświetlenie wszystkich informacji o produkcie.
	2. Możliwość dodania produktu do koszyka.
3. Obsługa koszyka (dowolna biblioteka do zarządzania state, np. redux)
	1. Dodawanie produktów do koszyka.
	2. Usuwanie produktów z koszyka.
	3. Zmiana ilości danego produktu w koszyku.
	4. Podgląd koszyka w nawigacji.
4. Składanie zamówienia (dowolna biblioteka do walidowania, np. zod)
	1. Możliwość podania danych, takich jak imię, nazwisko, adres zamieszkania, numer telefonu, etc.
	2. Podanie danych karty kredytowej w poniższym formacie
		- Owner's Name: Jan Kowalski
		- Credit card: 0000000000000000
		- CVV: 000
		- Exp. date: 00/00
	3. Wszystkie pola muszą być walidowane
5. Obsługa websocketów
	1. Nasłuchiwanie eventów dot. aktualizacji produktów i podmiana realtime w aplikacji.

#### Dokumentacja API

 Dokumentacje znajdziesz [tutaj](http://188.137.111.131:8083/api/documentation)

 Do API wymagane jest zalogowanie się, login i hasło do konta zostały przesłane w treści maila.
 Po zalogowaniu się do konta API zwraca bearer `token`, który musi być przesyłany w headerze każdego zapytania do API.
 W przypadku utraty ważności tokenu, wymagane jest ponowne logowanie się do API.
 W razie jakichkolwiek problemów z API prosimy o informację.
 
 Użytkownik utraci ważność po 7 dniach od rozpoczęcia zadania.
 
#### Dokumentacja WebSocketów

- Połączenie z WebSocketem
  
  Informacje jak połączyć się z WebSocketem znajdziesz [tutaj](https://laravel.com/docs/11.x/broadcasting#client-side-installation).
  
  Dodatkowo w celu autoryzacji z naszym serwerem WebSocket dodaj poniższy kod do twojej konfiguracji: 
  
```ts
const echo = new Echo({
	//...
	channelAuthorization: {  
	    endpoint: "http://188.137.111.131:8083/api/broadcasting/auth",
	    cluster: REVERB_APP_CUSTER,
	    headersProvider: () => {  
	        return {  
	            Authorization: `Bearer ${API_TOKEN}`,  
	            Accept: "application/json",  
	        };    
		},
	},
});

```
- Te dane będą ci potrzebne do skonfigurowania połączenia, zapisz je w pliku `.env` (zmienne środowiskowe) i pamiętaj żeby wykluczyć go w pliku `.gitignore`.
	
		- REVERB_APP_KEY - "txvmfspg63quwioqr9iq"
		- REVERB_APP_HOST - "188.137.111.131"
		- REVERB_APP_PORT - "8005"
		- REVERB_APP_CLUSTER - "MT1"
		- API_TOKEN - Token, który otrzymałeś po zalogowaniu

- Nasłuchiwanie eventu dot. aktualizacji produktu

```ts
echo
	.private(`products.${userId}`)
	.listen(".Updated", (updatedItem) => {  
  
	});
```
*Zwróć szczególną uwagę na "." przed nazwą eventu, który chcesz nasłuchiwać.*

Więcej o nasłuchiwaniu eventów możesz przeczytać [tutaj](https://laravel.com/docs/11.x/broadcasting#receiving-broadcasts "https://laravel.com/docs/11.x/broadcasting#receiving-broadcasts
(https://laravel.com/docs/11.x/broadcasting#receiving-broadcasts)").


#### Instrukcje do realizacji

1. Rozpocznij od utworzenia nowego repozytorium dla aplikacji.
2. Skopiuj zawartość zadania do repozytorium.
3. Zaimplementuj wymienione funkcjonalności
4. Udostępnij aplikację na platformie takiej jak [GitHub](https://github.com/) lub [GitLab](https://about.gitlab.com/) i udostępnij nam link do repozytorium.
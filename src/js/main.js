var openMessagesBtn = document.querySelector('.main-page__btn-correspondence'),
	closeMessagesBtn = document.querySelector('.correspondence-popup__close'),
	messagesPopUp = document.querySelector('.correspondence-popup');

openMessagesBtn.addEventListener('click', function (e) {
	e.preventDefault();
	if (messagesPopUp.classList.contains('hidden')) {
		messagesPopUp.classList.remove('hidden');
		messagesPopUp.classList.add('open');
	}
	setTimeout(function () {
		var blockMessages = document.querySelector('.correspondence-popup__messages');
		blockMessages.scrollTop = blockMessages.scrollHeight;
	}, 100);

	messageText = document.querySelector('#my-message-text');
	messageText.addEventListener('keydown', autosize);

	function autosize() {
		var el = this;
		setTimeout(function () {
			el.style.cssText = 'height:auto;';
			el.style.cssText = 'height:' + el.scrollHeight + 'px';
		}, 0);
	}

	closeMessagesBtn.addEventListener('click', function (e) {
		e.preventDefault();
		messagesPopUp.classList.remove('open');
		messagesPopUp.classList.add('hidden');
	});
});

function newMessage() {
	var messageText = document.querySelector('#my-message-text');

	if (messageText.value) {
		var makeElement = function (tagName, className, text) {
			var element = document.createElement(tagName);
			if (className) {
				element.classList.add(className);
			}
			if (text) {
				element.textContent = text;
			}

			return element;
		};

		var creatMessage = function () {
			var itemMessage = makeElement('div', 'correspondence-popup__message');
			itemMessage.classList.add('my-message');

			var imgMessage = makeElement('img');
			imgMessage.src = 'img/tumblr_mru25.png';
			itemMessage.appendChild(imgMessage);

			var message = makeElement('p', 'correspondence-popup__message-text', messageText.value);
			itemMessage.appendChild(message);

			var timeMessage = makeElement('div', 'correspondence-popup__message-time');
			var date = new Date();
			if (date.getMinutes() < 10) {
				timeMessage.textContent = date.getHours() + ':0' + date.getMinutes();
			} else {
				timeMessage.textContent = date.getHours() + ':' + date.getMinutes();
			}
			itemMessage.appendChild(timeMessage);

			return itemMessage;
		};

		var listMessage = document.querySelector('.correspondence-popup__messages');
		var newMessage = creatMessage();
		listMessage.appendChild(newMessage);

		setTimeout(function () {
			var blockMessages = document.querySelector('.correspondence-popup__messages');
			blockMessages.scrollTop = blockMessages.scrollHeight;
		}, 100);

		newMessage.style.backgroundColor = '#e9f2fa';

		setTimeout(function () {
			newMessage.style.backgroundColor = '';
		}, 2000)
	}
}

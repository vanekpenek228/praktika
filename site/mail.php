<?php

	$personal_name = $_POST['personal_name'];
	$type_place = $_POST['type_place'];
	$telephone = $_POST['telephone'];
	$email = $_POST['email'];

	if (!empty($personal_name) && !empty($type_place) && !empty($telephone) && !empty($email)) {
		$to = 'prostobron@bk.ru'; // Кому отправлять данные с формы
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: ПростоБронь <noreply@prostobron.ru>\r\n";
		$subject = 'Заявка на подключение'; // Тема письма
		$message = '
		<p>Контактное лицо: '.$personal_name.'<p>
		<p>Тип средства размещения: '.$type_place.'<p>
		<p>Телефон: '.$telephone.'<p>
		<p>Email: '.$email.'<p>'; // Сообщение в письме
		mail($to, $subject, $message, $headers);
	}

	header('Location: /'); // Переадресация после отправки

?>
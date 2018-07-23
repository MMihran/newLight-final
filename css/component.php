<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<section class="index-contact two-col-form block-apply-form">

  <div class="container">
	<div class="row">
	  <div class="col-sm-12">
		<a href="#" class="scroll-btn-circle"></a>
	  </div>
	</div>
  </div> 
  
  <div class="container contact-content">
	<div class="row">
	
	  <div class="col-sm-6">
		<h2 class="title">
		  <span>Как будет выглядеть ваш дом?</span><br> Узнайте у нашего <br>специалиста
		</h2>

		<div class="img-wrap text-center with-bg">
		  <span class="img-border"><img src="<?=SITE_TEMPLATE_PATH?>/img/priv-form-left.jpg" alt=""></span>
		</div>
		
		<p class="slogan">Создадим для вас уютный, комфортный дом <br>под ваш строительный бюджет</p>
		
		<form onsubmit="return false" class="form-float callback___form">
		  <div class="input-wrap">
			<input type="text" name="name" placeholder="Ваше имя" class="name">
			<span class="valid___block not-valid"></span>
		  </div>
		  <div class="input-wrap">
			<input type="text" name="phone" placeholder="Номер телефона">
			<span class="valid___block not-valid"></span>
		  </div>
		  
		  <p class="error___p yellow center"></p>
		  
		  <button class="form-btn callback___button to___process">Отправить заявку</button>
		  
		  <div class="form-bot">
			<label class="input-checkbox">
				<span class="chk-wrap">
					<input type="checkbox" name="agree" value="1">
				<span><i class="fa fa-check" aria-hidden="true"></i></span></span>
				<p>Я согласен на обработку <a href="/agreement/" target="blank">персональных данных</a></p>
			</label>
		  </div>
		  
		  <input type="hidden" name="page" value="<?=pureURL()?>">
		  
		</form>
		
	  </div>
	  
	  <div class="col-sm-6">
		<h2 class="title">
		  <span>Преимущества индивидуального <br>проекта</span> перед типовым <br>из интернета
		</h2>

		<div class="img-wrap text-center">
		  <span class="img-border"><img src="<?=SITE_TEMPLATE_PATH?>/img/priv-form-right.jpg" alt=""></span>
		</div>
		<p class="slogan">10 проблем с покупными проектами, <br>о которых вы не знали!</p>
		
		<form onsubmit="return false" class="form-float callback___form">
		  <div class="input-wrap">
				<input type="text" name="name" placeholder="Ваше имя" class="name">
			<span class="valid___block not-valid"></span>
		  </div>
		  <div class="input-wrap">
				<input type="text" name="phone" placeholder="Номер телефона">
			<span class="valid___block not-valid"></span>
		  </div>
		  
		  <p class="error___p yellow center"></p>
		  
		  <button class="form-btn callback___button to___process">Отправить заявку</button>
		  
		  <div class="form-bot">
			<label class="input-checkbox">
				<span class="chk-wrap">
					<input type="checkbox" name="agree" value="1">
				<span><i class="fa fa-check" aria-hidden="true"></i></span></span>
				<p>Я согласен на обработку <a href="/agreement/" target="blank">персональных данных</a></p>
			</label>
		  </div>
		  
		  <input type="hidden" name="page" value="<?=pureURL()?>">
		  
		</form>
		
	  </div>
	  
	  <div class="col-sm-12 no-relative">
		<div class="line-text">или</div>
	  </div>
	</div>
	
  </div>
</section>
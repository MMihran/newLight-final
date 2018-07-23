<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if( count($arResult['ITEMS']) > 0 ){ ?>

	<section class="private-prices">
		
		<div class="container">
		  
			<h2 class="sample-h2"><?=$arParams['BLOCK_TITLE']?></h2>
			
			<div class="price-slider">
			
				<? foreach ( $arResult['ITEMS'] as $arItem ){ ?>
				
					<div class="price-item">
						<div class="item-wrap">
						  <p class="item-name f18"><?=$arItem['NAME']?></p>
						  <p class="item-price"><sup>от</sup><b><?=number_format($arItem['PROPERTY_PRICE_VALUE'], 0, ",", " ")?></b><sub>руб.</sub></p>
						  <button class="btn-prime f16 visible-xs" data-target="#examples-modal_<?=$arItem['ID']?>">Узнать больше</button>
						  <div class="item-after f14">
							<? if(
								is_array($arItem['PROPERTY_PUNKTY_VALUE'])
								&&
								count($arItem['PROPERTY_PUNKTY_VALUE']) > 0
							){ ?>
								<ul class="item-list">
									<? foreach ( $arItem['PROPERTY_PUNKTY_VALUE'] as $punkt ){ ?>
									   <li><?=$punkt?></li>
									<? } ?>
								 </ul> 
							<? } ?>
							 <button class="btn-prime f16" data-target="#examples-modal_<?=$arItem['ID']?>">Узнать больше</button>
						  </div>
						</div>
					</div>
				
				<? } ?>
			  
			</div>
		</div>
	
	</section>
	
	
	<? foreach ( $arResult['ITEMS'] as $arItem ){ ?>
		
		<div class="modal fade examples-modal" id="examples-modal_<?=$arItem['ID']?>">
		  <div class="modal-dialog" role="document">
			<div class="modal-content">
			  <div class="example-wrap">
			  
				<h2><?=$arItem['NAME']?></h2>
				
				<? if(
					is_array($arItem['PROPERTY_PHOTOS_VALUE'])
					&&
					count($arItem['PROPERTY_PHOTOS_VALUE']) > 0
				){ ?>
					
					<div class="items-wrap">
					
						<? foreach( $arItem['PROPERTY_PHOTOS_VALUE'] as $key => $photo_id ){ ?>
						
							<div class="item">
								<img src="<?=rIMGG($photo_id, 5, 210, 160)?>">
								<p><?=$arItem['PROPERTY_PHOTOS_DESCRIPTION'][$key]?></p>
							</div>
							
						<? } ?>
					
					</div>
					
				<? } ?>

				<p><?=$arItem['PREVIEW_TEXT']?></p>
				
			  </div>
			  
			  <button type="button" class="btn btn-default prime-close" data-dismiss="modal">&#215;</button>
			  
			</div>
		  </div>
		</div>
		
	<? } ?>
	
<? } ?>
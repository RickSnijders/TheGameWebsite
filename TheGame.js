alert("Welkom bij mijn game")
var name = prompt("Wat is je characters naam")
var levelOne = false;
var levelTwo = false;
var levelThree = false;
var levelFour = false;
var levelFive = false;
var levelSix = false;
var levelSeven = false;
var levelEight = false;
var levelNine = false;



while(levelOne == false){
	answer = prompt("Hoe komt " + name + " de bank binnen? \n\n 1) Met geweld \n 2) Undercover \n\n (gebruik 1 of 2)")
	if (answer == 1){	
		levelOne = true
		while(levelTwo == false){
			answer = prompt(name + " gaat met geweld naar binnen \n\n 1) Gaat " + name + " door explosieven de bank binnen breken \n 2) "  + name + " neemt een geweer mee \n\n (gebruik 1 of 2)" )
			if (answer == 1){
				alert(name + " is doodgegaan door de explosie")
				levelTwo = true	
			} 
			else if (answer == 2){
				levelTwo = true
				while(levelThree == false){
					answer = prompt(name + " ziet een bewaker, wat doe je? \n\n 1) Schiet hem dood \n 2) Probeer de bewaker te ontwijken \n\n (gebruik 1 of 2)")
					if (answer == 1){
						levelThree = true
						while(levelFour == false){
							answer = prompt(name + " is bij de kluis hoe maakt hij hem open? \n\n 1) Door hem te kraken \n 2) Door de kluis open te blazen \n\n (gebruik 1 of 2)")
							if (answer == 1){
								alert("Het kraken duurt te lang " + name + " wordt gesnapt")
								levelFour = true
							}
							else if (answer == 2){
								levelFour = true
								while(levelFive == false){
									answer = prompt("De kluisdeur blaast open, het alarm gaat wel af. Wat gaat " + name + " eerst doen? \n\n 1) Het alarm uitzetten \n 2) De kluis ingaan \n\n (gebruik 1 of 2)")
									if (answer == 1){
										levelFive = true
										while(levelSix == false){
											answer = prompt(name + " moet een kant kiezen voor het alarm, welke kan kiest hij? \n\n 1) Links \n 2) Rechts \n\n (gebruik 1 of 2)")
											if (answer == 1){
												alert(name + " loopt recht op een groepje bewakers af, hij wordt gearresteerd.")
												levelSix = true
											}
											else if (answer == 2){
												levelSix = true
												while(levelSeven == false){
													answer = prompt(name + " komt bij het alarm aan, welke kleur draad moet hij doorknippen om het alarm te stoppen? \n\n 1) Blauw \n 2) Geel \n 3) Groen \n\n (gebruik 1 ,2 of 3)")
													if (answer == 1){
														alert("Fout, het alarm wordt erger en " + name + " is gepakt.")
														levelSeven = true
													}
													else if (answer == 2){
														levelSeven = true
														while(levelEight == false){
															answer = prompt("Het alarm is gestopt, wat gaat " + name + " doen? \n\n 1) De kluis ingaan en alles in 1 rugzak stoppen \n 2) De kluis ingaan en de buit verdelen in 2 tassen \n\n (gebruik 1 of 2)")
															if (answer == 1){
																alert(name + " wilt de bank verlaten maar zijn rugzak scheurt open, hij wilt alles weer oppakken maar hij wordt gearresteerd.")
																levelEight = true
															}
															else if (answer == 2){
																levelEight = true
																while(levelNine == false){
																	answer = prompt("Het gewicht in " + name + " zijn tassen is goed verdeeld, Hoe verlaat hij de bank? \n\n 1) Via de achteringang \n 2) Via het dak \n\n (gebruik 1 en 2)")
																	if (answer == 1){
																		alert(name + " komt de bank uit zonder gepakt te worden. Je hebt gewonnen!")
																		levelNine = true
																	}
																	else if (answer == 2){
																		alert(name + " komt op het dak maar daar staat een groep politie agenten. Hij wordt gearresteerd.")
																		levelNine = true
																	}
																	else {
																		alert("Dit is geen geldig karakter")
																	}
																}
															}
															else {
																alert("Dit is geen geldig karakter")
															}
														}
													}
													else if (answer == 3){
														alert("Fout, het alarm wordt erger en " + name + " is gepakt.")
														levelSeven = true
													}
													else {
														alert("Dit is geen geldig karakter")
													}
												}
											}
											else {
												alert("Dit is geen geldig karakter")
											}
										}
									}
									else if (answer == 2){
										alert("Voor " + name + " het weet staat de hele kluis vol met politie, hij wordt gearresteerd.")
										levelFive = true
									}
									else {
										alert("Dit is geen geldig karakter")
									}
								}
							}
							else {
								alert("Dit is geen geldig karakter")
							}
						}

					}
					else if (answer == 2){
						alert(name + " heeft de bewaker ontweken maar wordt gesnapt door een medewerker")
						levelThree = true
					}
					else {
						alert("Dit is geen geldig karakter")
					}
				}
			}
			
			else {
				alert("Dit is geen geldig karakter")
			}
		}
	}


	 
	else if (answer == 2){
		levelOne = true
		while(levelTwo == false){
			answer = prompt(name + " gaat undercover naar binnen \n\n 1) " + name + " verkleedt zich als een medewerker \n 2) " + name + " verkleedt zich als een bewaker \n\n (gebruik 1 of 2)")
			if (answer == 1){
				alert(name + " komt een bankmedewerker tegen hierdoor wordt hij gesnapt")
				levelTwo = true
			}
			else if (answer == 2){
				levelTwo = true
				while(levelThree == false){	
					answer = prompt("Hoe kom je aan de sleutel van de kluis? \n\n 1) Een sleutel stelen van een bewaker \n 2) De sleutel stelen uit het kantoor van de bankdirecteur \n\n (gebruik 1 of 2)")
					if(answer == 1){
						alert(name + " probeert de sleutel te stelen van de bewaker maar hij heeft hem door, " + name + " wordt gearresteerd.")
						levelThree = true
					}
					else if (answer == 2){
						levelThree = true
						while(levelFour == false){
							answer = prompt("Welke kant is het kantoor op? \n\n 1) Links \n 2) Rechts \n\n (gebruik 1 of 2)")
							if (answer == 1){
								alert(name + " loopt recht op een groep bewakers af, hij wordt gearresteerd.")
								levelFour = true
							}
							else if (answer == 2){
								levelFour = true
								while(levelFive == false){
									answer = prompt("Dit is de goede kant. Maar de directeur ligt slapend in zijn kantoor, hoe lost " + name + " dit op? \n\n 1) De deur zachtjes openen en op je tenen naar de sleutel lopen \n 2) Via het openstaande raam naar binnen gaan en de sleutel pakken \n\n (gebruik 1 of 2)")
									if (answer == 1){
										alert("De deur kraakt en de directeurwordt wakker, hij roept de bewaking en " + name + " wordt gearresteerd")
										levelFive = true
									}	
									else if (answer == 2) {
										levelFive = true
										while(levelSix == false){
											answer = prompt(name + " heeft de sleutel voor de kluis, wat gaat hij doen? \n\n 1) De kluis openen en doen alsof hij een inspectie gaat doen \n 2) wachten tot er niemand meer in de buurt van de kluis is \n\n (gebruik 1 of 2)")
											if (answer == 1){
												levelSix = true
												while(levelSeven == false){
													answer = prompt("Niemand heeft je door. Hoe ga je de buit meenemen? \n\n 1) Je broekzakken vullen en je rugzak \n 2) Het gewicht verdelen over 2 tassen \n\n (gebruik 1 of 2)")
													if (answer == 1){
														alert("Er valt een diamant uit " + name + " zijn broekzak terwijl hij bijna bij de uitgang is, hij wordt gearresteerd.")
														levelSeven = true
													}
													else if (answer == 2){
														alert(name + " gaat met de tassen via de achteruitgang, niemand heeft hem door, je hebt gewonnen!")
														levelSeven = true
													}
													else {
														alert("Dit is geen geldig karakter")
													}
												}
											}
											else if (answer == 2){
												alert(name + " is de kluis aan het openen maar er komt net een bewaker om de hoek. Hij vraagt wat " + name + " doet. " + name + " weet niet wat hij moet antwoorden, hij wordt gearresteerd" )
												levelSix = true
											}
											else {
												alert("Dit is geen geldig karakter")
											}
										}
									}
									else {
										alert("Dit is geen geldig karakter")
									}
								}		
							}
							else {
								alert("Dit is geen geldig karakter")
							}
						}
					}
					else {
						alert("Dit is geen geldig karakter")
					}
				}
			}
			else {
				alert("Dit is geen geldig karakter")
			}
		}	
	} 
	else {
		alert("Dit is geen geldig karakter")
	}
}

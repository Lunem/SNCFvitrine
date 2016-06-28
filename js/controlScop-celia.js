app.controller('myCtrl', function($scope) {

$scope.panier_validation = true;
$scope.acces = false;

$scope.isActive1 = true;
$scope.panier_valide1 = true;

$scope.isActive2 = true;
$scope.panier_valide2 = true;

$scope.isActive3 = true;
$scope.panier_valide3 = true;

$scope.isActive4 = true;
$scope.panier_valide4 = true;
// $scope.isActive2 = true;
// $scope.isActive3 = true;
// $scope.isActive4 = true;


$scope.livraison = false;
$scope.tableau_vente_finale = false;
$scope.diapoFinalAchat = false;
$scope.modal_box_produit = false;
$scope.count = 0;


$scope.submit = function() {
			$scope.isActive1 = !$scope.isActive1;
			$scope.isActive2 = !$scope.isActive2;
			$scope.isActive3 = !$scope.isActive3;
			$scope.isActive4 = !$scope.isActive4;
			// $scope.isActive3 = !$scope.isActive3;
			// $scope.isActive4 = !$scope.isActive4;
			$scope.panier_validation = false;
			$scope.acces = true;

			$scope.isActive1 = false;
			$scope.panier_valide1 = false;

			$scope.isActive2 = false;
			$scope.panier_valide2 = false;


			$scope.isActive3 = true;
			$scope.panier_valide3 = true;

			$scope.isActive4 = true;
			$scope.panier_valide4 = true;
			// $scope.isActive2 = false;
			// $scope.isActive3 = false;
			// $scope.isActive2 = false;
		}


$scope.services = [
					{ "image": "image/10vin.png",
					"imageFavori1": "image/d-vine-fav.jpg",
					"nomProduit": "D-VINE",
					"title": "10-vins",
					"texte": "Découvrez D‑VINE,la première machine de dégustation de vin au verre qui aère et met à température le vin de vos flacons. Vivez une expérience inédite avec ce sommelier connecté, testé et approuvé par des passionnés, amateurs et professionnels.",
					"produit": "image/sevenhugs.jpg",
					"thumbnail1": "image/dodow.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/prynt.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "http://www.10-vins.com/d-vine",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
					},

					{ "image": "image/bellabeat.png",
					"nomProduit": "",
					"title": "Bellebeat",
					"texte": "We believe that every woman has the potential to achieve greatness. To achieve greatness, our bodies need to work to their full potential and our minds need to be clear and productive. The LEAF was built to help you discover your hidden potential.",
					"produit": "image/feeltact.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/sevenhugs.jpg",
					"thumbnail3": "image/chipolo.jpg",
					"texte_produit" : "The health-tracking technology connects your body and mind, allowing you to reach your full potential. Track your daily activity, sleep, mindfulness and menstrual cycles. With the LEAF, important and essential information about your health is always available.",
					"url" : "https://www.bellabeat.com",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},
					{ "image": "image/bragi.png",
					"imageFavori1": "image/thedash-fav.jpg",
					"nomProduit": "The Dash",
					"title": "Bragi",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit": "image/dash.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/dodow.jpg",
					"thumbnail3": "image/sevenhugs.jpg",
					"texte_produit" : "The Dash is a wireless smart earphone that combines 3 essential features in 1 product.",
					"url" : "http://www.bragi.com/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},

					{ "image": "image/chipolo.png",
					"title": "Chipolo",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit": "image/chipolo.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/dodow.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "https://chipolo.net/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},
					{ "image": "image/devialet.png",
					"nomProduit": "",
					"title": "Devialet",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit": "image/phantom.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/prynt.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "http://phantom.devialet.com/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},

					{ "image": "image/dodow.png",
					"nomProduit": "",
					"title": "Dodow",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit": "image/dodow.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/prynt.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "https://www.mydodow.com/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},
					{ "image": "image/dualo.png",
					"imageFavori2": "image/dualo-fav.jpg",
					"nomProduit": "Dualo Du-touch",
					"title": "Dualo",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit": "image/dualo.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/dodow.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "https://dualo.org/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},

					{ "image": "image/kyon.png",
					"nomProduit": "",
					"title": "Kyon",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit": "image/kyon.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/prynt.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "http://www.kyon.ch/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},
					{ "image": "image/makeblock.png",
					"imageFavori2": "image/codeybot-kickstarter-4-fav.jpg",
					"nomProduit": "Codeybot",
					"title": "Makeblock",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit": "image/codeybot.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/prynt.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "http://www.makeblock.cc/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},

					{ "image": "image/mimo.png",
					"nomProduit": "",
					"title": "Mimo",
					"texte": "Mimo uses the best sensor technology available to tell you how your baby is breathing as well as their body position. It’s the first product to provide alerts and send nightly reports little one’s sleep, and it uses your smartphone to connect all your caregivers and keep you connected. Mimo helps everyone in the family get more quality sleep.",
					"produit": "image/feeltact.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/prynt.jpg",
					"texte_produit" : "The nursery just got smarter: Mimo now works with select Nest products to provide you with additional peace of mind. If the baby is too warm, adjust the nursery temperature with your Nest Learning Thermostat. Are they moving? Check in on them with your NestCam. Better ways to stay connected and live smarter, all from one place.",
					"url" : "http://www.scoop.it",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},
					{ "image": "image/mybiody.png",
					"nomProduit": "",
					"title": "My Biody",
					"texte": "	Vous voulez un appareil pour toute la famille. MYBIODY est multi-utilisateur, il peut être utilisé par toute la famille et vous permet de tester tout votre entourage.",
					"produit": "image/codeybot.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/prynt.jpg",
					"texte_produit" : "MYBIODY est une technologie française et exclusive qui permet d’analyser immédiatement notre santé corporelle. A chaque checkup, MYBIODY délivre un bilan corporel, une analyse personnalisée et des conseils pour améliorer votre forme et notre santé.",
					"url" : "http://www.mybiody.com/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},

					{ "image": "image/netatmo.png",
					"nomProduit": "",
					"title": "Netatmo",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit":  "image/sevenhugs.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/prynt.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "https://www.netatmo.com/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},
					{ "image": "image/novitact.png",
					"nomProduit": "",
					"title": "Novitact",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit": "image/feeltact.jpg",
					"thumbnail1": "image/kyon.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/dodow.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "https://www.novitact.com",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},

					{ "image": "image/optinvent.png",
					"nomProduit": "",
					"title": "Optinvent",
					"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
					"produit": "image/codeybot.jpg",
					"thumbnail1": "image/petnet.jpg",
					"thumbnail2": "image/codeybot.jpg",
					"thumbnail3": "image/prynt.jpg",
					"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"url" : "http://www.optinvent.com/",
					"contribuer" : 'image/contribuer.png',
					"financement" : 'image/financement.png',
					"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
				},
				{ "image": "image/petnet.png",
				"nomProduit": "",
				"title": "Petnet",
				"texte": "Manage feeding times, portion sizes, food supply and have your pet’s food delivered to your doorstep.",
				"produit": "image/codeybot.jpg",
				"thumbnail1": "image/kyon.jpg",
				"thumbnail2": "image/codeybot.jpg",
				"thumbnail3": "image/prynt.jpg",
				"texte_produit" : "Manage feeding times, portion sizes, food supply and have your pet’s food delivered to your doorstep.",
				"url" : "http://www.petnet.io/",
				"contribuer" : 'image/contribuer.png',
				"financement" : 'image/financement.png',
				"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
			},

				{ "image": "image/prynt.png",
				"imageFavori1": "image/Prynt-printing-fav.jpg",
				"nomProduit": "The Prynt Case",
				"title": "Prynt",
				"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
				"produit": "image/prynt.jpg",
				"thumbnail1": "image/kyon.jpg",
				"thumbnail2": "image/codeybot.jpg",
				"thumbnail3": "image/prynt.jpg",
				"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"url" : "https://www.prynt.co/",
				"contribuer" : 'image/contribuer.png',
				"financement" : 'image/financement.png',
				"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
			},
				{ "image": "image/ripple.png",
				"nomProduit": "",
				"title": "Ripple",
				"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
				"produit": "image/codeybot.jpg",
				"thumbnail1": "image/kyon.jpg",
				"thumbnail2": "image/codeybot.jpg",
				"thumbnail3": "image/prynt.jpg",
				"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"url" : "https://ripple.com/",
				"contribuer" : 'image/contribuer.png',
				"financement" : 'image/financement.png',
				"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
			},

				{ "image": "image/scribble.png",
				"imageFavori2": "image/Scribble-Pen-fav.jpg",
				"nomProduit": "Scribble Pen",
				"title": "Scribble",
				"texte": "The Dash is a wireless smart earphone that combines 3 essential features in 1 product. Listen. A one-touch standalone music player. ",
				"produit": "image/dash.jpg",
				"thumbnail1": "image/kyon.jpg",
				"thumbnail2": "image/codeybot.jpg",
				"thumbnail3": "image/prynt.jpg",
				"texte_produit" : "Experience the world’s first wireless smart earphones.",
				"url" : "https://thescribblepen.com/",
				"contribuer" : 'image/contribuer.png',
				"financement" : 'image/financement.png',
				"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
			},
				{ "image": "image/sensorwake.png",
				"nomProduit": "",
				"title": "Sensorwake",
				"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
				"produit": "image/codeybot.jpg",
				"thumbnail1": "image/kyon.jpg",
				"thumbnail2": "image/codeybot.jpg",
				"thumbnail3": "image/prynt.jpg",
				"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"url" : "https://sensorwake.com",
				"contribuer" : 'image/contribuer.png',
				"financement" : 'image/financement.png',
				"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
			},

				{ "image": "image/sevenhugs.png",
				"nomProduit": "",
				"title": "Sevenhugs",
				"texte": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta quasi dolor eveniet voluptatem obcaecati sit! Accusamus molestiae, nobis reprehenderit dolorem repellat recusandae hic harum illo animi, sed, tempora voluptatem.",
				"produit": "image/sevenhugs.jpg",
				"thumbnail1": "image/kyon.jpg",
				"thumbnail2": "image/codeybot.jpg",
				"thumbnail3": "image/prynt.jpg",
				"texte_produit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"url" : "http://sevenhugs.com/fr/",
				"contribuer" : 'image/contribuer.png',
				"financement" : 'image/financement.png',
				"text_produit" : "Le robot entierement customisable qui apprends aux enfants à coder, danser, jouer de la musique et projetter des lasers !"
			}
				]



$scope.connecter = function() {
	$scope.isActive1 = !$scope.isActive1;
	$scope.isActive2 = !$scope.isActive2;
	$scope.isActive3 = !$scope.isActive3;
	$scope.isActive4 = !$scope.isActive4;
	$scope.livraison = true;
	$scope.acces = false;

	$scope.isActive1 = false;
	$scope.panier_valide1 = false;

	$scope.isActive2 = true;
	$scope.panier_valide2 = true;


	$scope.isActive3 = false;
	$scope.panier_valide3 = false;

	$scope.isActive4 = true;
	$scope.panier_valide4 = true;
}




$scope.submitFinal = function() {
	$scope.isActive1 = !$scope.isActive1;
	$scope.isActive2 = !$scope.isActive2;
	$scope.isActive3 = !$scope.isActive3;
	$scope.isActive4 = !$scope.isActive4;
	$scope.livraison = false;
	$scope.acces = false;
	$scope.tableau_vente_finale = true;

	$scope.isActive1 = false;
	$scope.panier_valide1 = false;

	$scope.isActive2 = true;
	$scope.panier_valide2 = true;


	$scope.isActive3 = true;
	$scope.panier_valide3 = true;

	$scope.isActive4 = false;
	$scope.panier_valide4 = false;
}


$scope.finalFinalSubmit = function() {
	$scope.isActive1 = !$scope.isActive1;
	$scope.isActive2 = !$scope.isActive2;
	$scope.isActive3 = !$scope.isActive3;
	$scope.isActive4 = !$scope.isActive4;
	$scope.livraison = false;
	$scope.acces = false;
	$scope.diapoFinalAchat = true;
	$scope.tableau_vente_finale = false;

	$scope.isActive1 = false;
	$scope.panier_valide1 = false;

	$scope.isActive2 = true;
	$scope.panier_valide2 = true;


	$scope.isActive3 = true;
	$scope.panier_valide3 = true;

	$scope.isActive4 = true;
	$scope.panier_valide4 = true;
}

$scope.myFilter1 = function(service) {
	return service.imageFavori1? true:false;
};
$scope.myFilter2 = function(service) {
	return service.imageFavori2? true:false;
};
$scope.detail_produit = function() {
  $scope.modal_box_produit = true;
};
$scope.close_modal = function () {
	$scope.modal_box_produit = false;
};
$scope.acheter = function () {
	$scope.count = $scope.count +1;
};
});

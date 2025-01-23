import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Star,
  Heart,
  Users,
  Calendar,
  MessageCircle,
  Check,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import IMG from "../../public/asset/img/pet.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
      <main className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Bienvenue dans le <span className="text-blue-600">PETSWAVE</span> des Animaux
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Chez PETSWAVE, nous comprenons que vos animaux de compagnie sont bien plus que de simples animaux - ils
                font partie de votre famille. Découvrez notre communauté dédiée aux amoureux des animaux, nos services
                exceptionnels et nos conseils d&apos;experts pour offrir la meilleure vie possible à vos compagnons à quatre
                pattes !
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/login"
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Rejoignez-nous
                </Link>
                <Link
                  href="/register"
                  className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  cree une nouvelle compte
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src={IMG || "/placeholder.svg"}
                  alt="Chien et chat heureux"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                  <p className="text-gray-800 font-semibold">Plus de 10 000 propriétaires satisfaits !</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Pourquoi PETSWAVE est le choix idéal pour vous et vos animaux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Conseils d'experts personnalisés",
                description:
                  "Accédez à des conseils de vétérinaires, comportementalistes et nutritionnistes pour répondre à tous vos besoins.",
                color: "blue",
              },
              {
                icon: Calendar,
                title: "Services disponibles 24/7",
                description:
                  "Une assistance vétérinaire d'urgence, des conseils et du support disponibles à tout moment pour vous et vos compagnons.",
                color: "green",
              },
              {
                icon: MessageCircle,
                title: "Communauté active et bienveillante",
                description:
                  "Échangez, partagez et apprenez au sein d'une communauté passionnée d'amoureux des animaux.",
                color: "purple",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-${item.color}-50 rounded-xl p-6 text-center transition duration-300 hover:shadow-xl transform hover:-translate-y-2`}
              >
                <div className={`bg-${item.color}-100 rounded-full p-4 inline-block mb-4`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos services les plus populaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation vétérinaire en ligne",
                description: "Obtenez des conseils d'experts sans quitter votre domicile",
              },
              {
                title: "Garde d'animaux à domicile",
                description: "Des gardiens certifiés et passionnés pour vos compagnons",
              },
              {
                title: "Cours de dressage personnalisés",
                description: "Apprenez à communiquer efficacement avec votre animal",
              },
              {
                title: "Alimentation sur mesure",
                description: "Plans nutritionnels adaptés aux besoins spécifiques de votre animal",
              },
              {
                title: "Séances de bien-être animal",
                description: "Massages et thérapies pour le confort de votre compagnon",
              },
              { title: "Club de socialisation", description: "Rencontres et activités pour animaux sociables" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300 flex items-center"
                >
                  En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Rejoignez notre communauté d'amoureux des animaux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-700 mb-8">
                Chez PETSWAVE, nous croyons en la force de la communauté. Rejoignez des milliers d'autres passionnés
                d'animaux pour partager des expériences, obtenir des conseils et célébrer l'amour que nous portons à nos
                compagnons à quatre pattes.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Forums de discussion animés",
                  "Événements communautaires mensuels",
                  "Partage de photos et d'histoires",
                  "Conseils d'experts et entraide entre membres",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/community"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Rejoindre la communauté
              </Link>
            </div>
            <div className="relative">
              <Image
                src={IMG || "/placeholder.svg"}
                alt="Communauté PETSWAVE"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="text-gray-800 font-semibold">Plus de 50 000 membres actifs !</p>
                <div className="flex items-center mt-2">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-bold">Communauté grandissante</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Témoignages de nos membres heureux
            </h2>
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <p className="text-gray-700 mb-6 text-lg italic">
                "Grâce à PETSWAVE, j'ai trouvé une communauté incroyable d'amoureux des animaux. Les conseils d'experts
                m'ont aidé à mieux comprendre les besoins de mon chien, et les services de garde sont tout simplement
                fantastiques !"
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Sophie M."
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">Sophie M.</p>
                  <p className="text-gray-600">Membre depuis 2 ans</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Derniers articles de notre blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "10 astuces pour garder votre chat en bonne santé",
                date: "12 mai 2023",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Les meilleures races de chiens pour les familles",
                date: "5 mai 2023",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Comment préparer une alimentation équilibrée pour votre animal",
                date: "28 avril 2023",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.date}</p>
                  <Link
                    href="/blog"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300 flex items-center"
                  >
                    Lire l'article <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Voir tous les articles <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Prêt à rejoindre la famille PETSWAVE ?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Inscrivez-vous dès maintenant et profitez de nos offres exclusives pour nouveaux membres !
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/signup"
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                S'inscrire gratuitement
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white font-bold py-3 px-6 rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PETSWAVE</h3>
              <p className="mb-4">Le paradis pour vos animaux de compagnie</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-blue-300 transition duration-300">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-300 transition duration-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-blue-300 transition duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300 transition duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/veterinary" className="hover:text-blue-300 transition duration-300">
                    Consultation vétérinaire
                  </Link>
                </li>
                <li>
                  <Link href="/services/grooming" className="hover:text-blue-300 transition duration-300">
                    Toilettage
                  </Link>
                </li>
                <li>
                  <Link href="/services/training" className="hover:text-blue-300 transition duration-300">
                    Dressage
                  </Link>
                </li>
                <li>
                  <Link href="/services/boarding" className="hover:text-blue-300 transition duration-300">
                    Pension
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="mb-4">Inscrivez-vous pour recevoir nos dernières actualités et offres spéciales.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2023 PETSWAVE. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import {
    Bars3Icon,
    MinusSmallIcon,
    PlusSmallIcon,
    SwatchIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    CheckIcon,
    ServerIcon,
    CpuChipIcon,
    WrenchScrewdriverIcon,
    PencilIcon,
    ComputerDesktopIcon,
    FlagIcon,
} from "@heroicons/react/20/solid";

const navigation = [
    { name: "Acerca de", href: "#about" },
    { name: "¿Cómo funciona?", href: "#" },
    { name: "Talleres", href: "#cursos" },
    { name: "Ingresar a insignias", href: "#" },
    { name: "Preguntas Frecuentes", href: "#faq" },
];
const features = [
    {
        name: "Programación web nivel 1 (3 talleres)",
        description:
            "Aprende las prácitcas, principios, herramientas y flujos de trabajo necesarios para producir una aplicación web.",
        icon: CpuChipIcon,
    },
    {
        name: "Programación web nivel 2 (3 talleres)",
        description:
            "Lleva al siguiente nivel tus habilidades de diseño y programación con manejo de bases de datos y diseño de una aplicación 100% funcional.",
        icon: WrenchScrewdriverIcon,
    },
    {
        name: "Diseño gráfico y de interacción 1 (3 talleres)",
        description:
            "Perfecciona tus habilidades de diseño con las herramientas más actuales  aplicadas a la comunicación visual y el diseño de interacción.",
        icon: PencilIcon,
    },
    {
        name: "Creatividad e innovación aplicadas 1 (3 talleres)",
        description:
            "Potencia tu confianza creativa mediante herramientas para idear, diseñar, prototipar y validar productos y servicios innovadores.",
        icon: ComputerDesktopIcon,
    },
    {
        name: "Creación de contenido digital 1 (3 talleres)",
        description:
            "Genera y gestiona contenido en audio, video e imagen, para las plataformas más populares; utilizando herramientas accesibles y gratuitas.",
        icon: SwatchIcon,
    },
];
const tiers = [
    {
        name: "Hobby",
        id: "tier-hobby",
        href: "#",
        priceMonthly: "$19",
        description:
            "The perfect plan if you're just getting started with our product.",
        features: [
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced analytics",
            "24-hour support response time",
        ],
        featured: false,
    },
    {
        name: "Enterprise",
        id: "tier-enterprise",
        href: "#",
        priceMonthly: "$49",
        description: "Dedicated support and infrastructure for your company.",
        features: [
            "Unlimited products",
            "Unlimited subscribers",
            "Advanced analytics",
            "Dedicated support representative",
            "Marketing automations",
            "Custom integrations",
        ],
        featured: true,
    },
];
const faqs = [
    {
        question: "¿Qué puedo hacer con lo aprendido en Train The Teachers?",
        answer: "El objetivo es que el aprendizaje obtenido se aplique directamente en el diseño de nuevas experiencias de aprendizaje o el mejoramiento de las existentes.",
    },
    {
        question:
            "¿Cuál es la diferencia entre Train The Teachers y los cursos que ofrece el CUDD?",
        answer: "En esencia ninguna. Los cursos de Train The Teachers también son gestionados y validados a través del CUDD. En cuanto a su forma, Train The Teachers es impartido por personal de la Coordinación de Tecnologías de Información de la UACH y se estructura a partir de micro-talleres de corta duración y rutas de aprendizaje.",
    },
    {
        question: "¿Qué es una ruta de aprendizaje?",
        answer: "Train The Teachers se basa en el 'armado' de ejes temáticos -llamados 'Rutas de Aprendizaje'- que agrupan talleres que, una vez sumados, llevan al participante a desarrollar el dominio práctico de una habilidad, técnica o  herramienta concreta. Al día de hoy, Train The Teachers ofrece rutas de aprendizaje en temas como Diseño, Programación e Innovación; cada una con cursos sobre temas relevantes y prácticos.",
    },
    {
        question: "¿Qué son los microcréditos?",
        answer: "Certificados que se conceden -en forma de insignias digitales infalsificables- al concluir satisfactoriamente cursos o talleres de corta duración. Los microcréditos pueden sumarse entre sí para acreditar un logro más extenso, como un taller o un diplomado. En Train The Teachers cada 20 horas acumuladas en microcréditos equivalen a un taller o curso convencional, con validez para el Programa de Estímulos al Desempeño Docente.",
    },
    {
        question: "¿Qué es una insignia?",
        answer: "Es una imagen digital que representa un logro de aprendizaje. Las insignias se obtienen al acreditar satisfactoriamente un taller y se suman para obtener créditos equivalentes a un taller o curso convencional impartido en el CUDD.",
    },
    {
        question: "Soy maestro hora-clase, ¿puedo tomar los talleres?",
        answer: "¡Por supuesto que sí! El objetivo es que todas y todos los docentes de la UACH cuenten con un espacio para aprender y mejorar sus habilidades tecnológicas, buscando en última instancia el impacto positivo en la calidad educativa.",
    },
    {
        question:
            "Soy alumno de la UACH, ¿puedo tomar los cursos de Train The Teachers?",
        answer: "De momento no, aunque nos encantaría saber de ti para considerar tus inquietudes y ofrecer talleres para las y los alumnos.",
    },
    {
        question:
            "No estoy en la UACH, ¿puedo tomar los cursos de Train The Teachers?",
        answer: "De momento no, aunque nos encantaría saber de ti para considerar tus requerimientos en futuras etapas del programa.",
    },
    // More questions...
];
const footerNavigation = {
    interest: [
        { name: "Programas", href: "#" },
        { name: "Revistas", href: "#" },
        { name: "UACH", href: "#" },
        {
            name: "Capacitación a maestros para servicio social UACH",
            href: "#",
        },
    ],
    about: [
        { name: "Trayectorias", href: "#" },
        { name: "Preguntas Frecuentes", href: "#" },
        { name: "Ubicación", href: "#" },
        { name: "Organigrama", href: "#" },
    ],
    courses: [
        { name: "Diseño", href: "#" },
        { name: "Programación", href: "#" },
        { name: "Organización", href: "#" },
        { name: "Emprendimiento", href: "#" },
    ],
    docs: [
        { name: "Programa", href: "#" },
        { name: "Privacidad", href: "#" },
        { name: "Terminos y condiciones", href: "#" },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-gray-100">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    className="flex items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Train the teachers</span>
                            <img
                                className="h-10 w-auto"
                                src="/images/logo-white.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold leading-6 text-white"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            Ver cursos y talleres{" "}
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">
                                    Train the teachers
                                </span>
                                <img
                                    className="h-8 w-auto"
                                    src="/images/logo.png"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <main>
                {/* Hero section */}
                <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
                    <img
                        src="/images/portada.png"
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                            <img
                                src="/images/logo-white.png"
                                alt="Train the teachers"
                                className="py-5"
                            />
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div className="text-center">
                                    <h2 className="font-semibold text-5xl py-7">
                                        Diseña y construye experiencias
                                        innovadoras para tu clase
                                    </h2>
                                    <p className="mx-auto max-w-2xl">
                                        Talleres para innovar tu práctica
                                        docente con las herramientas y
                                        tecnologias más actuales.
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-sm bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                    >
                                        Ver cursos
                                    </a>
                                    <a
                                        href="#"
                                        className="text-sm font-semibold leading-6 text-white"
                                    >
                                        ¿Como funciona?{" "}
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Logo cloud */}
                        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <img
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="/images/logo-ciet-blanco.png"
                                alt="ciet"
                                width={158}
                                height={48}
                            />

                            <img
                                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                src="/images/cudd.png"
                                alt="cudd"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                                src="/images/+uach.png"
                                alt="+uach"
                                width={158}
                                height={48}
                            />
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                </div>

                {/* About section */}
                <div id="about" className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Acerca de
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Train The Teachers (T3) es un programa de
                                actualización tecnológica diseñado para docentes
                                que quieren perfeccionar sus habilidades
                                tecnológicas. T3 ofrece rutas de aprendizaje
                                compuestas por talleres breves (entre 3 y 6
                                horas) que, una vez acreditadas, cuentan para la
                                Beca de Estímulos al Desempeño Docente en la
                                UACH. El programa es impartido por expertos de
                                la Coordinación General de Tecnologías de
                                Información y se ofrece en conjunto con el
                                Centro Universitario para el Desarrollo Docente.
                                ¡Súmate al reto de innovar con tecnologías para
                                el aprendizaje!
                            </p>
                            <button className="mt-8 bg-primary px-6 py-3 rounded-sm text-white font-semibold shadow-sm hover:bg-softgray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400">
                                ¡Toma tu primer taller!
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden pt-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div>
                                <img
                                    src="https://images.unsplash.com/flagged/photo-1564445477052-8a3787406bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80"
                                    alt="App screenshot"
                                    className="mb-[-12%]  shadow-2xl ring-1 ring-gray-900/10"
                                    width={2432}
                                    height={1442}
                                />
                                <div class="absolute top-16 left-2 w-16 h-16 bg-gray-100 transform rotate-45 origin-top-right"></div>
                            </div>
                            <div className="relative" aria-hidden="true">
                                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="relative pl-9"
                                >
                                    <dt className="inline font-semibold text-gray-900">
                                        <feature.icon
                                            className="absolute left-1 top-1 h-5 w-5 text-primary"
                                            aria-hidden="true"
                                        />
                                        {feature.name}
                                    </dt>{" "}
                                    <dd className="inline">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <div className="flex justify-center pt-8">
                            <button className="mt-8 bg-primary px-6 py-3 rounded-sm text-white font-semibold shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400">
                                ¡Toma tu primer taller!
                            </button>
                        </div>
                    </div>
                </div>

                {/* Testimonial section */}
                <div
                    id="testimonios"
                    className="relative z-10 mt-32 bg-[#232323] pb-20 sm:mt-56 sm:pb-24 xl:pb-0"
                >
                    <div
                        className="absolute inset-0 overflow-hidden"
                        aria-hidden="true"
                    >
                        <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
                            <div
                                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#d7175e] to-[#808490] opacity-50"
                                style={{
                                    clipPath:
                                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                        <div className="-mt-8 w-full  max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                                <img
                                    className="absolute  inset-0 h-full w-full  bg-gray-800 object-cover shadow-2xl  "
                                    src="https://imagenes.elpais.com/resizer/XjW4khOBx8o3y54YiIaaFyhYF8k=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/QBRX5D7VM5E2TNMY3NGGEOPY54.jpg"
                                    alt=""
                                />
                                {/* <div class="absolute -top-3 -left-5 w-16 h-16 bg-gray-100 transform rotate-45 origin-top-right"></div> */}
                                <div class="absolute -top-3 -left-5 w-16 h-16 bg-gray-100 transform rotate-45 origin-top-right"></div>
                                {/* <div class="absolute -bottom-3 -right-5 w-16 h-16 bg-gray-100 transform rotate-45 origin-bottom-left"></div>{" "} */}
                            </div>
                        </div>
                        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                            <figure className="relative isolate pt-6 sm:pt-12">
                                <svg
                                    viewBox="0 0 162 128"
                                    fill="none"
                                    aria-hidden="true"
                                    className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                                >
                                    <path
                                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                    />
                                    <use
                                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                        x={86}
                                    />
                                </svg>
                                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                                    <p>
                                        "No puedes simplemente inyectar la
                                        creatividad. Es necesario crear un
                                        ambiente de curiosidad y una manera de
                                        motivar a las personas para obtener lo
                                        mejor de ellos mismos."
                                    </p>
                                </blockquote>
                                <figcaption className="mt-8 text-base">
                                    <div className="font-semibold text-white">
                                        Sir Ken Robinson
                                    </div>
                                    <div className="mt-1 text-gray-400">
                                        Escritor y conferencista británico
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                {/* Courses section */}
                <div
                    id="cursos"
                    className=" relative isolate mt-32 bg-gray-100 py-4 px-6 sm:mt-56 lg:px-8"
                >
                    <div
                        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                        {/* <h2 className="text-base font-semibold leading-7 text-primary">
              Cursos
            </h2> */}
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Talleres Disponibles
                        </p>
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                        Desarrolla tus habilidades tecnológicas y creativas
                        cursando los siguientes talleres:
                    </p>
                    <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
                        <img
                            src="/images/talleres/tallerprogra1.png"
                            alt="Course 1"
                            className="w-full px-6 py-5"
                        />
                        <img
                            src="/images/talleres/tallerprogra2.png"
                            alt="Course 2"
                            className="w-full px-6 py-5"
                        />
                        <img
                            src="/images/talleres/tallerdiseno.png"
                            alt="Course 2"
                            className="w-full px-6 py-5"
                        />
                        <img
                            src="/images/talleres/tallercrea.png"
                            alt="Course 2"
                            className="w-full px-6 py-5"
                        />
                        <img
                            src="/images/talleres/tallerconte.png"
                            alt="Course 2"
                            className="w-full px-6 py-5"
                        />
                    </div>
                </div>

                {/* FAQ section */}
                <div
                    id="faq"
                    className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8"
                >
                    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                            Preguntas frecuentes
                        </h2>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure
                                    as="div"
                                    key={faq.question}
                                    className="pt-6"
                                >
                                    {({ open }) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                    <span className="text-base font-semibold leading-7">
                                                        {faq.question}
                                                    </span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ? (
                                                            <MinusSmallIcon
                                                                className="h-6 w-6"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <PlusSmallIcon
                                                                className="h-6 w-6"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel
                                                as="dd"
                                                className="mt-2 pr-12"
                                            >
                                                <p className="text-base leading-7 text-gray-600">
                                                    {faq.answer}
                                                </p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer
                className="mt-32 bg-softgray sm:mt-56"
                aria-labelledby="footer-heading"
            >
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <img
                            className="h-12 my-2"
                            src="/images/logo-white.png"
                            alt="Company name"
                        />
                        <img
                            className="h-12 my-4"
                            src="https://res.cloudinary.com/djlx5smmq/image/upload/v1683660688/logo-uach_xce9py.png"
                            alt=""
                        />

                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold leading-6 text-white">
                                        Ligas de interés
                                    </h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.interest.map(
                                            (item) => (
                                                <li key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="text-sm leading-6 text-gray-300 hover:text-white"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-white">
                                        Nosotros
                                    </h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.about.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="text-sm leading-6 text-gray-300 hover:text-white"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold leading-6 text-white">
                                        Cursos
                                    </h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.courses.map(
                                            (item) => (
                                                <li key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="text-sm leading-6 text-gray-300 hover:text-white"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-white">
                                        Docs
                                    </h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.docs.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="text-sm leading-6 text-gray-300 hover:text-white"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

import React from "react"

import S1weight from "../../images/svg/s1weight.svg"
import S2apple from "../../images/svg/s2apple.svg"
import S3rope from "../../images/svg/s3rope.svg"
import S4body from "../../images/svg/s4body.svg"
import S5drugs from "../../images/svg/s5drugs.svg"

export const pageDataPL = {
  navbar: {
    links: [
      { name: "O TENFERTIL", href: "/#about" },
      { name: "FAKTY I PORADY", href: "/#facts" },
      { name: "KONTAKT", href: "#footer" },
      {
        name: (
          <>
            <strong style={{ color: "#151070" }}>PL</strong>/VN
          </>
        ),
        href: "/vn",
      },
    ],
  },
  title: {
    paragraph: "suplement diety dla mężczyzn starających się o dzieci",
    heading: "Optymalne wsparcie płodności",
  },
  aboutTenferil: {
    heading:
      "Jest prostym, innowacyjnym, bezpiecznym, a przede wszystkim skutecznym sposobem wspierania zdrowia mężczyzny w wieku rozrodczym.",
    paragraph:
      "10 składników: L-karnityna, Cholina, Cynk organiczny, Witamina C, Koenzym Q10 (ubichinon), L-arginina, Witamina E, Selen organiczny, Witamina B12, Kwas foliowy (L-metylofolian wapnia)",
    buttonLabel: "pobierz ulotkę",
  },
  leftBorderP: [
    "Chcesz, aby twoje życie nabrało kolorytu i prawdziwego sensu? Chcesz słyszeć jedno z piękniejszych słów – tata? Nic prostszego - postaraj się o potomstwo!",

    "Do tego jakże ważnego faktu musisz jednak odpowiednio się przygotować, zarówno pod względem mentalnym jak i fizycznym. Pamiętaj, że przygotowanie mężczyzny jest tak samo ważne, jak pomoc kobiecie w przygotowaniu do okresu ciąży. Wynika to z faktu, że zdrowe plemniki odgrywają kluczową rolę w procesie poczęcia. Zarówno odpowiedni styl życia przyszłego ojca oraz jego wiek mają wpływ na poczęcie zdrowego i upragnionego potomstwa.",
    <>
      Pomoże Ci w tym{" "}
      <strong>
        TENfertil<sup>&reg;</sup>ON
      </strong>
    </>,
  ],
  breakerFacts: {
    heading: "Jesteś mężczyzną\ni planujesz zdrowe potomstwo?",
    texts: ["Czy wiesz, że?"],
    id: "facts",
  },
  facts: [
    {
      header: "Niemal 1/3 pacjentów",
      text:
        "Cierpiących z powodu braku dzieci ma niepłodność idiopatyczną (30%), co oznacza, że nie ustalono przyczyn...",
    },
    {
      header: "Stres oksydacyjny",
      text:
        "Wykazano, że istotny wpływ na potencjał płodności mężczyzny (jakość nasienia) ma stres oksydacyjny. Dowody naukowe wskazują, że składniki zawarte w preparacie TENfertil ON skutecznie zmniejszają stres oksydacyjny.",
    },
    {
      header: "L-Karnityna",
      text:
        "W postaci winianu - pełni funkcje ochronne wobec błon komórkowych i DNA plemników przed wolnymi rodnikami, zapobiega obumieraniu komórek, poprawia ruchliwość, koncentracje i morfologię plemników. Udowodniono, że właściwy poziom wchłaniania uzyskuje się stosując 2 x dziennie. Efekt leczniczy widoczny jest przy przyjęciu co najmniej 1 g/ dobę. Wyższe dawki powodują uszkodzenie przewodu pokarmowego. TENfertil ON w 4 kapsułkach zawiera łącznie 1500 mg. Schemat podania wg schematu 2x 2 kapsułki na dobę, zapewnia optymalne stężenie L-Karnityny.",
    },
    {
      header: "Cholina",
      text:
        "Niezbędna do prawidłowego metabolizmu. Cholina reguluje gospodarkę lipidową, jest składnikiem fosfolipidów, wchodzących w skład błony komórkowej plemników. Działa synergicznie w kompleksie z witaminą B12, dodatkowo korzystnie poprawia koncentrację. Stąd też w preparacie TENfertil ON zastosowano takie połączenie.",
    },
    {
      header: "Koenzym Q10",
      text:
        "Ubichion, endogenny antyoksyndant - występuje w mitochondriach komórek roślinnych i zwierzęcych. Jest odpowiedzialny za przenoszenie elektronóww łańcuchu oddechowym. Suplementacja CoQ10 przez trzy miesiące może już poprawić parametry nasienia (ruchliwość, koncentracja i morfologia plemników), obniżyć poziom markerów stresu oksydacyjnego i zmniejszyć fragmentację DNA u niepłodnych mężczyzn z niepłodnością idiopatyczną.",
    },
    {
      header: "Selen organiczny",
      text:
        "Zastosowany związek L-selenometionina (selen organiczny) jest łatwiej wchłanialny przez człowieka w porównaniu ze związkami nieorganicznymi. Celowo zastosowano niską dawkę – 40 mcg z uwagi na łatwość kumulacji selenu w organizmie. Często pojawia się efekt toksyczny - selenoza (biegunki, mdłości, czosnkowy oddech, zmęczenie, apatia, wypadanie włosów, łysienie, kruchość, łamliwość oraz odbarwienia paznokci, bóle stawów, promocja cukrzycy typu II).",
    },
  ],
  breakerTips: {
    heading: "Jesteś mężczyzną\ni planujesz zdrowe potomstwo?",
    texts: [
      "Nic prostszego - zadbaj o siebie!\nPrzygotuj się do tego ważnego faktu pamiętając o naszych radach",
    ],
    id: "facts",
  },
  tips: [
    {
      image: <S1weight />,
      header: "zadbaj",
      text:
        "o prawidłową wagę swojego ciała! Jeśli masz nadwagę, to zrzuć zbędne kilogramy!",
    },
    {
      image: <S2apple />,
      header: "stosuj",
      text: "odpowiednią i zrównoważoną dietę ! Jedz zdrowe produkty!",
    },
    {
      image: <S3rope />,
      header: "ćwicz",
      text: "regularnie – 3 razy w tygodniu! Dużo spaceruj!",
    },
    {
      image: <S4body />,
      header: "noś",
      text:
        "luźne ubrania z naturalnych tkanin! Unikaj obcisłej bielizny i spodni!",
    },
    {
      image: <S5drugs />,
      header: "unikaj",
      text: "wszelkich używek!",
    },
  ],
  breakerNhi: {
    heading: "Nutrition Health Institute",
    texts: [
      "Nutrition Health Institute to firma, która koncentruje się na opracowywaniu i wytwarzaniu najnowszej generacji wieloskładnikowych preparatów farmaceutycznych, zarówno dla kobiet jak i dla mężczyzn, którzy pragną spełnić swoje największe marzenie – zostać szczęśliwymi rodzicami.",
      "Nutrition Health Institute chce pomóc mężczyznom w wieku rozrodczym w posiadaniu upragnionego potomstwa. Zachęcamy do zapoznania się z najnowszej generacji wieloskładnikowym preparatem TENfertil ON, który jest rekomendowany przez najlepszych w Polsce lekarzy-specjalistów zajmujących się leczeniem niepłodności.",
    ],
  },
}

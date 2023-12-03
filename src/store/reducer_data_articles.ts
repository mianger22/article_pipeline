import { ArticlesDataType } from "../common/CommonTypes"

const deafaultState: { articles_data: ArticlesDataType[] } = {
  articles_data: [
    {
      id: 1,
      title: 'Москва отмечает Новый Год!',
      link_img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTy9XiqIx6JMQzT5BAmhgVxtviIRLtbK4S2Q_lQVQsSDXVdLrLN_VEWMhytMcq7wC38Dk2yDl-Bd83ruGjphgKaer6zMxkffAJWIfJWvw',
      text: 'Сегодня Москва является столицей России. Впервые о ней упоминается в 1147 году, как о селе Москове. Согласно древним летописям, великий князь Юрий Долгорукий приказал обнести маленькое поселение, которое находилось на возвышенности, где сливались две реки – Москва-река и Неглинка, высокой деревянной стеной (городом). Стену окружил глубоким рвом и прозвал это место Москвой-градом. Основанный город благоприятно отразился на жителях. Он был очень удобно расположен, поскольку через него шли крупные торговые пути. Это способствовало дальнейшему росту и развитию Москвы. Москва имела статус столицы до 1712 года, после чего Петр I присвоил его Санкт-Петербургу. Вернули его только после 1917 года. Но за это время Москва продолжала развиваться во всех направлениях. Был открыт Московский государственный университет (МГУ) при непосредственном участии великого ученого М. В. Ломоносова. Появились две гимназии – одна для дворянских детей, а вторая – для детей разночинцев и купцов. В мегаполисе открыто более 60 театров, около 100 музеев, 75 высших учебных заведений, галерей. Для москвичей и гостей столицы работают свыше 4000 библиотек, в том числе и известная «Ленинка» (Библиотека имени Ленина). Уникальна московская система транспорта, которая включает вокзалы железной дороги, аэропорты, городской транспорт, метро. Некоторые станции метрополитена являются памятниками архитектуры. Метро продолжает развиваться и ежегодно открывает новые станции для пассажиров. Правительство Москвы делает все возможное для комфортного проживания москвичей и гостей столицы. Инфраструктура развивается, и город становится более современным и практичным.',
      is_opened_text: false,
      is_read: false
    },
    {
      id: 2,
      title: 'Великий Новгород стал городом миллионником',
      link_img: 'https://lh5.googleusercontent.com/p/AF1QipO9sjmeo-eh5Ub00IFqZaS6dRLAfBcOhibRCjps=w810-h468-n-k-no',
      text: 'Здесь не носили лаптей, а ходили в кожаных сапогах, здесь мостили улицы с древних времен, простолюдины вели оживленную переписку, а князей звали и прогоняли когда хотели. Здесь можно постоять на том самом месте, откуда, по преданию, сбросили в реку кровожадного языческого бога Перуна, искупаться в озере, на берегу которого пел свои чарующие песни купец Садко, поучаствовать в ристалищах современных новгородских витязей. Здесь, и только здесь вы в полной мере ощутите связь времен и исконную атмосферу Земли Русской. Старейший город России, колыбель русской демократии, средневековый центр торговли и ремесел, крупнейший партнер Ганзейского Союза в XII-XVII вв., связующее звено между средневековой Европой и Русью и рубеж на границе двух цивилизаций - все это Великий Новгород. Слово «новгородцы» впервые звучит в летописи под 859 годом. Предметом научных споров до сих пор остаются точная дата возникновения Новгорода и местоположение «старого» города. В последнее время преобладает точка зрения, по которой роль старого города отдается Городищу, расположенному на правом берегу Волхова, в 2 километрах от современного города. Именно там, вероятно, находилась резиденция князя Рюрика, призванного в IX в. на княжение в Новгород и положившего начало династии Рюриковичей. В X в. город был перенесен на новое место и назван Новгородом. После покорения Киева князем Олегом во главе новгородской дружины и образования единого государства Киевская Русь, Новгород становится вторым по значению центром нового государства. В свое время здесь княжили Владимир Красное Солнышко и его сын Ярослав Мудрый.',
      is_opened_text: false,
      is_read: false
    },
    {
      id: 3,
      title: 'Венеция ушла под воду. Все погибли!',
      link_img: 'https://travellgide.ru/wp-content/uploads/2018/07/venecia-800x445.jpg',
      text: 'Несмотря на то, что у Венеции очень романтичный образ и сюда стремятся попасть влюбленные со всего мира, семейные пары с детьми от них не отстают. Многие семьи отдыхают на соседних морских курортах Италии, Хорватии и Словении, а в Венецию выбираются на денек, два. Кто-то может предположить, что в каменном лабиринте детям не место, постараюсь развеять этот миф, опираясь на личный опыт. Так как наша семья живет на границе Словении и Италии, всего в двух часах пути от Венеции, то мы со своей дочкой и детьми наших друзей частые гости этого удивительного города. Так что же посмотреть с детьми и как их развлечь в Венеции?',
      is_opened_text: false,
      is_read: false
    },
  ]
}

export const reducerDataArticles = (state = deafaultState, action: any) => {
  switch (action.type) {
    case "OPEN_TEXT": 
      return {...state, articles_data: state.articles_data
        .map(el => el.id === action.payload ? {...el, is_opened_text: true} : {...el, is_opened_text: false})}
    case "CHANGE_ORDER_ELEMENTS": 
      // 1. копирую исходный массив
      let old_list_articles_data = state.articles_data;
      // 2. получаю переданный id
      const id_selected_article = action.payload;
      // 3. выбираю элемент исходного массива и меняю его id на 1
      old_list_articles_data[id_selected_article - 1].id = 1;
      // 4. меняю id первого элемента на переданный id
      old_list_articles_data[0].id = id_selected_article;
      // 5. сортирую
      [old_list_articles_data[0], old_list_articles_data[id_selected_article - 1]] = [old_list_articles_data[id_selected_article - 1], old_list_articles_data[0]];

      return {...state, articles_data: old_list_articles_data}
    case "IS_READ_ARTICLE":
      // ставим метку, что статья прочитана
      return {...state, articles_data: state.articles_data
        .map(el => el.id === action.payload ? {...el, is_read: true} : el)}
    default: 
      return state
  }
}
import { ArticlesDataType } from "../common/CommonTypes";
import ListArticles from "../components/list_articles/ListArticles";
import SelectedArticle from "../components/list_articles/SelectedArticle";
import ShowcaseArticles from "../components/showcase_articles/ShowcaseArticles";
import { useSelector } from "react-redux";

const articles_data: ArticlesDataType[] = [
  {
    id: 1,
    title: 'Москва отмечает Новый Год!',
    link_img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTy9XiqIx6JMQzT5BAmhgVxtviIRLtbK4S2Q_lQVQsSDXVdLrLN_VEWMhytMcq7wC38Dk2yDl-Bd83ruGjphgKaer6zMxkffAJWIfJWvw',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet voluptate, cumque laborum cum placeat! Ea nesciunt natus magni quod similique unde illum tempora sequi doloremque, impedit ex quibusdam inventore nemo quasi accusamus culpa sint iure voluptas enim dolores. Nemo inventore, corporis debitis sapiente quo eligendi. Quibusdam ducimus aliquid sit unde, voluptate doloremque est autem exercitationem necessitatibus ipsam deleniti quia, laudantium minus illo aspernatur asperiores et tempore eveniet, dolore aut? Alias, deleniti molestias eius voluptatibus iure amet expedita iusto illo enim consequatur itaque praesentium omnis, incidunt ipsa laboriosam asperiores error unde fugiat earum est atque ratione dolorum quisquam! Dignissimos libero officia quasi, molestias magnam cum consequatur quos non doloribus odit veritatis eum quas ipsa animi ab accusantium hic id voluptatem accusamus? Tenetur accusantium expedita eaque fugit voluptatibus cum blanditiis dignissimos. Iste excepturi beatae incidunt nesciunt sed repellat nobis. Aspernatur praesentium atque at veniam. Architecto dolor, voluptatum, harum tempore, et quia dolores atque facere mollitia dolore rem commodi provident ratione assumenda pariatur incidunt eum omnis molestias quasi voluptatibus ad sint! Architecto eligendi eius delectus cum ex cupiditate ipsum, deleniti beatae. Cumque atque iure corporis soluta provident quia, et distinctio illum possimus, ducimus dicta iusto vero voluptatibus, fugit a ea. Numquam officia, quibusdam voluptates ex rerum maiores laudantium veniam accusamus vel, hic aperiam adipisci molestiae? Possimus, quo fugiat assumenda deleniti harum error minima ipsum nihil architecto repellat recusandae eius, nostrum est, eos incidunt nulla accusantium impedit dicta. Ipsam iste cupiditate rerum tempore, laudantium temporibus explicabo, neque architecto quidem nobis, officia vitae sit distinctio quibusdam veritatis culpa nulla. Aperiam ab quos itaque officia ex cumque, aliquid quisquam repudiandae mollitia, hic illum. Nobis qui rerum nemo enim blanditiis reiciendis quo accusamus, fugit commodi, saepe eveniet sed? Dolor voluptate consequuntur est, harum placeat incidunt quia nam ipsum dolorum quam asperiores dicta illo, quidem unde provident. Corrupti cumque voluptates animi quia quibusdam mollitia nostrum nam, tempora dicta id eaque vero? Reiciendis quo sapiente incidunt vel temporibus quaerat dolores unde consectetur! Magni quasi quibusdam pariatur. At aliquam, corrupti nam impedit velit, iusto voluptates temporibus aliquid provident esse ab recusandae. Delectus, repudiandae iusto. A laudantium corporis reiciendis consequatur aperiam nemo architecto amet mollitia quisquam placeat numquam quia eos, nulla explicabo ab ut dolores distinctio fugiat facere sit consequuntur tempora at incidunt! Totam nulla autem ipsam, aperiam, explicabo quidem soluta nesciunt aspernatur placeat minima omnis inventore reprehenderit ab eligendi sequi libero sit molestiae sed cumque veniam. Tempore excepturi, ducimus unde nemo voluptas, quisquam molestias totam cumque nulla qui ad magnam asperiores laudantium quas officiis eos aliquam quaerat odit ipsam. Cum ducimus, sapiente doloribus consequuntur quia itaque eum consectetur ad mollitia nostrum corporis veniam harum enim minus modi ratione aspernatur quos? Quos facilis itaque reiciendis vero quidem quae rerum voluptatem vel cupiditate quas inventore, soluta, similique eveniet ea aliquam eligendi ad rem voluptatibus provident fugit! Eligendi ab, voluptatibus harum deleniti amet earum error quidem porro possimus odio voluptas tempore nam reiciendis laborum, ea architecto fugit alias nobis sit facere? Ad animi est minima, numquam beatae voluptas odio provident sequi fugiat, eaque perferendis quae. Placeat, a ab cum et iusto laboriosam qui omnis dicta vitae, blanditiis enim. Enim nam, maiores doloremque recusandae praesentium voluptate dolor, saepe nesciunt sed laudantium aperiam ipsa totam libero neque. Commodi non atque, dolorum exercitationem quae, molestiae repudiandae architecto doloremque provident natus tempora voluptatum. Ipsam nihil expedita quae sit tempore eaque, quos est unde laudantium minima fugiat sequi aspernatur quaerat iusto pariatur nesciunt blanditiis. Ex fuga incidunt consequuntur iure animi culpa similique fugiat voluptas soluta odio, quidem aperiam quae ad velit. Quaerat et in accusamus animi ab, dolorum cum ut soluta similique incidunt atque repellendus delectus recusandae quam cupiditate blanditiis iusto veritatis eaque, quod maiores doloremque rerum dolores quas. Praesentium molestiae omnis non qui, nam harum laudantium voluptatibus eaque quae repellat at quasi assumenda commodi vero accusamus debitis exercitationem quam quaerat voluptate iure obcaecati ea quos! Dicta cumque sunt nulla, accusantium veritatis tenetur commodi non illum temporibus, in eaque, necessitatibus voluptatibus maxime molestiae delectus error? Facilis quisquam alias illo earum laboriosam ducimus iste error laborum dolor minus nulla, necessitatibus exercitationem laudantium porro ratione explicabo nisi illum, quibusdam non et excepturi vero minima! Nesciunt beatae error nisi est consectetur iure repellendus facilis, autem eveniet eaque dolorem, minus velit?'
  },
  {
    id: 2,
    title: 'Великий Новгород стал городом миллионником',
    link_img: 'https://lh5.googleusercontent.com/p/AF1QipO9sjmeo-eh5Ub00IFqZaS6dRLAfBcOhibRCjps=w810-h468-n-k-no',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officia sint voluptatum inventore a sit necessitatibus consequatur numquam! Iusto consequatur autem illum error natus architecto excepturi sapiente voluptates doloribus mollitia.'
  },
]

export default function MainPage() {
  const isSelectArticle = useSelector((state: any) => state.isSelectArticle);
  const numberSelectedArticle = useSelector((state: any) => state.numberSelectedArticle);

  return (
    <div className='flex w-full'>
      <div className='w-2/12 flex items-center justify-center'>

      </div>
      <div className='w-8/12 flex items-center justify-center'>
        { isSelectArticle ?
            <SelectedArticle articles_data={articles_data} currentNumber={numberSelectedArticle} /> 
          :
            <ListArticles articles_data={articles_data} />
        }
      </div>
      <div className='w-2/12 py-5 px-2'>
        <ShowcaseArticles articles_data={articles_data} />
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import '../Styles/ScrollBar.css'

const ScrollIndicator = () => {
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll =
                document.body.scrollTop || document.documentElement.scrollTop;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setProgressWidth(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progressWidth}%` }}>
                    {progressWidth > 0 && <span className="progress-text">{`${Math.round(progressWidth)}%`}</span>}
                </div>
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto sapiente delectus atque animi, repudiandae ut, deserunt quo illo ex autem excepturi at molestias possimus omnis porro magnam necessitatibus laboriosam incidunt, quas libero perspiciatis voluptatibus. Explicabo nihil harum alias beatae. Reiciendis labore delectus hic vero id? Dolore molestias voluptates, dolor consectetur non sint accusamus sunt, modi doloribus asperiores quia amet autem delectus harum? Sapiente quis facere rem nisi illo nemo quibusdam dolores debitis fuga, reprehenderit animi accusantium suscipit quo voluptatum.




                Praesentium quis aliquam unde perspiciatis sed! Neque dolor, voluptatum qui vero harum itaque a. Nobis, ipsum soluta. Eius error asperiores labore dolore doloremque natus dignissimos accusantium pariatur eligendi, molestiae sed provident atque voluptate laboriosam iste quasi libero nihil aliquam porro, tempore minus ad ut? Soluta, sint sequi nemo dolorem sunt beatae repellendus vel est accusantium dicta a voluptas iusto atque eum nam nulla voluptate dolore ad possimus asperiores praesentium quasi suscipit tenetur! Corrupti similique numquam quasi in autem est accusantium quaerat. Officia ducimus, saepe accusantium numquam, fugit enim fugiat, qui in ratione et error sint unde a molestias exercitat




                ionem magnam quo. Placeat aut ipsam adipisci atque iure sint deleniti eius aliquid repudiandae reprehenderit mollitia corrupti voluptas obcaecati rerum consequatur blanditiis accusantium quis numquam inventore error quas dolores, unde optio nam. Autem deserunt corporis illo, necessitatibus sed quam molestiae fugiat inventore alias. Sequi voluptates culpa debitis provident beatae reiciendis architecto est omnis ducimus magnam, facere reprehenderit sit voluptatibus doloribus temporibus et animi impedit nemo dolor maiores, autem laboriosam fuga inventore? Odio exercitationem ea aliquam laborum mollitia tempora aliquid quod temporibus molestias officia beatae odit repellendus voluptas dignissimos, eveniet neque hic fuga. Eligendi tempora eveniet quibusdam sunt










                debitis eum quidem nihil quam adipisci, provident, ipsum illum. Repellendus incidunt odio eos accusantium eius nobis similique corporis quisquam omnis exercitationem deleniti assumenda ducimus soluta maxime architecto perspiciatis recusandae, voluptate, debitis odit. Sit odio quo tempore quasi nostrum non vel quisquam qui a officiis saepe, earum dicta iste ratione expedita, ullam voluptates magni fugiat ducimus libero necessitatibus voluptas consectetur sequi. Sapiente fugiat minus, consequuntur assumenda quas simil










                ique itaque quasi error praesentium iste necessitatibus deleniti doloribus odit vitae odio quos eligendi animi culpa adipisci, iure quibusdam explicabo inventore nisi tenetur. At optio iure totam cupiditate rerum similique aliquam expedita harum laborum dolore. Magnam temporibus ad deserunt, hic debitis itaque soluta. Perspiciatis dolor architecto commodi nobis quibusdam, repellat eveniet atque blanditiis minima paria











                tur nemo alias, quaerat totam suscipit, eligendi quia illum cupiditate maxime delectus officiis animi nulla temporibus at odit? Pariatur iste harum libero? Ut eligendi dignissimos est iure rem illo pariatur, soluta dolore commodi voluptatibus libero hic earum consequuntur enim, numquam, ipsum tempore corrupti iste quam aliquam. Sit tenetur rerum veniam numquam repellat, rem eos. Sit amet vero neque provident eum! Veritatis ea laborum reprehenderit sit porro impedit nostrum suscipit, vitae iste, ducimus aperiam maxime ratione maiores atque at expedita saepe delectus quibusdam obcaecati itaque, corrupti sed? Expedita commodi fuga cum maiores in, doloremque omnis magnam, quae fugiat incidunt quia laudantium. Esse voluptas nulla iure commodi nesciunt dicta harum earum incidunt tempora sapiente! Tempore, quaerat nesciunt! Modi est ipsum ipsam praesentium? Qui illo quis nobis officiis ullam commodi ipsa culpa consectetur quidem tempora voluptatibus tempore dolorem, beatae sed pariatur sit. Eius veritatis sed adipisci eos, iure maxime debitis. Sunt deb






                itis deserunt incidunt enim. Dolor, mollitia. Aperiam, distinctio cum. Ab, veniam consectetur. Mollitia ad expedita unde magni placeat ut repellendus voluptates, sunt consectetur voluptatum assumenda saepe laudantium omnis officia et sint, autem laborum voluptas. Delectus voluptatem similique provident quos amet, consequuntur dolorum, sit, odio sequi deserunt doloribus mollitia tempore ipsum voluptatibus vero impedit at incidunt! Iure, perspiciatis. Ipsum neque aut sit dolore quaerat voluptate culpa aliquam obcaecati eveniet cum! Inventore, cum! Illo reiciendis assumenda autem quae dolor amet reprehenderit ex doloribus nostrum, adipisci at cupiditate. Explicabo tempora magni excepturi doloribus repudiandae expedita aperiam magnam animi tenetur dignissimos, odit incidunt numquam alias! Consectetur repellendus ipsum sint quasi atque, modi harum, quisquam rem molestias dolores voluptate quo distinctio aperiam voluptatum similique eni













                m et cumque at quis dolore molestiae ad corrupti reprehenderit. Quos sint, amet eos laudantium at quis fugit? Officia amet pariatur officiis maxime voluptatem, ea enim laboriosam quisquam vitae ducimus expedita similique, sint vel aliquid dolore rerum aspernatur omnis, temporibus laborum aliquam in mollitia at saepe voluptas. Saepe cum laudantium sunt hic fuga id tenetur quas molestiae fugiat quidem iusto deserunt animi, aperiam sint soluta nam officiis odit facere autem est quia quaerat illum tempore nobis. Cum ea saepe voluptate, nam ad officiis accusantium? Quam veniam ad odit modi tempore et ducimus, rerum nisi placeat exercitationem perferendis asperiores excepturi voluptates culpa obcaecati. Esse, tempora delectus, corporis eveniet velit aspernatur quos fuga consequatur officia, quidem error odit ullam aperiam culpa tenetur in laudantium asperiores? Veniam quod ipsum ducimus eius! Aliquid nihil aperiam totam provident perspiciatis laborum molestias quam deserunt, veniam at nam praesentium quasi explicabo facere eum necessitatibus quia quibusdam quaerat dolor? Quia reiciendis voluptatum excepturi ipsam. Aliquid sint, pariatur expedita aperiam explicabo tempora fugiat iste maxime harum minima porro illum temporibus dolore ipsa saepe adipisci omnis obcaecati, rerum molestiae? Sed repudiandae odio possimus nemo ipsa facilis quas commodi eius excepturi dolor. Totam maiores ex, ea neque omnis sint quia sit inventore eius explicabo id perferendis, recusandae magna












                m, laboriosam voluptas commodi nesciunt. Quae quas voluptatum, consequatur in repellat doloribus error corporis. Sit, assumenda repellendus maiores reiciendis quia, iure perspiciatis doloremque odio in perferendis iusto recusandae quaerat neque sed veritatis impedit dolorem accusantium deserunt eligendi? Tempore, maiores! Non ut deleniti aliquid repudiandae ipsam at quo ad ab velit beatae, explicabo molestiae libero exercitationem iusto minus, soluta mollitia optio consequatur est harum minima. Temporibus iusto ratione iure, accusamus culpa provident expedita ut iste unde doloremque fugit dicta ex autem maxime vel odit delectus excepturi sed atque pariatur adipisci possimus repudiandae! Ratione, odio. Officiis aut nihil totam, doloribus numquam modi voluptatum iusto, aspernatur voluptatem reiciendis ab fugiat dolores odit. Atque, quia. Quam ullam quia impedit illum alias sit totam nobis maiores! Illum dignissimos itaque officiis quo aspernatur quae doloribus repellat alias non?






                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minima? Recusandae accusantium beatae, tempore aperiam atque cumque numquam ipsa, esse error dolorem asperiores sint enim facere repellendus. Sequi doloribus sed impedit unde at similique autem blanditiis laboriosam repudiandae assumenda. Labore itaque quod veritatis maxime, modi tenetur aperiam. Animi unde velit enim, harum tempora beatae ratione voluptate error alias adipisci quaerat modi natus, impedit cumque, fuga sequi possimus! Harum impedit adipisci, iste eaque facilis distinctio excepturi earum, tempora, voluptatem aut nemo. Accusantium ullam voluptatibus facilis accusamus minima amet fuga quo consectetur. Nulla ex













                cepturi tenetur, ut facere, quos nam dignissimos nesciunt exercitationem quo, voluptates dolorem tempora itaque atque inventore eos consequuntur obcaecati libero eligendi neque veniam aliquam? Laboriosam maxime laborum possimus qui, placeat incidunt soluta. Qui rerum deleniti perferendis ipsam possimus quae asperiores sapiente, ducimus alias, dignissimos temporibus ipsum, optio velit excepturi quos nobis accusamus corporis saepe debitis iusto dicta. Ex, provident deleniti, tempora cum dolor dignissimos ratione explicabo ipsum, aliquid enim aut sequi temporibus necessitatibus eveniet quod molestias aperiam accusantium ut distinctio. Ducimus vero expedita voluptatem acc











                usantium dolorum ab eum suscipit, asperiores ad, esse voluptate labore, iste cum id odio! Amet possimus ipsum sint at odit itaque earum quisquam provident, consequatur optio inventore. Minus est voluptate et enim ullam omnis optio modi. Quas quasi ducimus adipisci dignissimos laboriosam nesciunt tempora quibusdam animi soluta sit? Commodi maxime, vel vitae quas ex accusamus quos aut consectetur explicabo quam ea tempore nesciunt quis provident obcaecati unde? Iste eveniet laboriosam quod mollitia, repudiandae laborum autem neque, commodi, rem voluptatum animi ea! Dignissimos delectus aut voluptates optio odio distinctio velit dicta? Culpa hic blanditiis quod autem delectus explicabo ut saepe magni, ratione odit enim nulla dicta laudantium? In natus recusandae reprehenderit, iste repellendus sunt modi veritatis consectetur obcaecati impedit tempore veniam velit error illum. Itaque, officiis libero optio deserunt molestias dolorem mollitia eum vel unde. Dolore possimus neque distinctio similique hic. Nam voluptatibus aperiam








                sapiente suscipit odit. Explicabo doloremque adipisci tempore possimus doloribus vel mollitia, dicta nesciunt perferendis labore sunt consectetur unde atque. Dolorem quibusdam inventore nemo. Molestias adipisci autem, quod dolorem animi non at beatae officiis dolorum quas unde quaerat ipsa id aliquam ipsum ex voluptate nisi aperiam voluptatem aspernatur sit. Atque enim quae quo molestiae iure cum magni illo laboriosam quibusdam inventore ex officia repellendus perspiciatis exercitationem expedita reprehenderit doloribus voluptas, labore esse dignissimos reiciendis nostrum, nemo ullam quasi? Molestias vero mollitia iste voluptatem veritatis cumque fuga, dicta quis aut odio commodi quibusdam reprehenderit amet dignissimos minus explicabo laborum adipisci quos, eligendi nobis harum architecto exercitationem! Molestias nam id perferendis qui delectus amet saepe natus aliquam dignissimos perspiciatis dolorem cupiditate, dolore a iusto quo reiciendis nisi repudiandae mollitia? Voluptas inventore repellendus alias! Illo quidem fugiat harum iste exercitationem neque deserunt. Repellendus cupiditate ea sit elige









                ndi iste consequuntur perferendis et saepe tenetur repudiandae unde mollitia veniam cum impedit amet, aliquam temporibus deleniti, vero, doloremque nobis quidem id dolor natus doloribus? Incidunt, deserunt. Aperiam ducimus consequatur a, deleniti tempore at quam blanditiis quibusdam iusto, corrupti perferendis eaque illum! Deserunt quibusdam dicta deleniti, molestiae rem minus eligendi delectus nobis error enim non ad, commodi, omnis atque et. Aliquid consequuntur reprehenderit natus? Expedita suscipit natus maiores incidunt perferendis consequatur maxime quibusdam nobis dolores ratione totam iste saepe eligendi vero ex dolore minus sint sed omnis odio veritatis, at voluptate. Nemo porro illum est aliquam, quibusdam eius provident et, doloribus cupiditate consectetur officia commodi laboriosam quam laudantium tenetur qui aspernatur voluptas debitis voluptatibus consequuntur deleniti! Itaque eos sit fugiat aperiam eveniet voluptatibus pariatur doloremque obcaecati ipsa, officiis eligendi optio nam laudantium cumque dolor incidunt debitis! Beatae consequuntur laboriosam, explicabo iure dolore rerum tempora sint velit autem inventore ut, quae distinctio? Officiis autem eaque quidem necessitatibus, molestiae, sunt debitis ab veniam aperiam aspernatur voluptatibus. Dolore autem qui eos minima facere quisquam beatae amet officia voluptatum, nisi sit in vel dolorem veniam voluptate. Minus inventore aut consectetur quisquam nulla autem quo rerum vero accusamus obcaecati? Consequuntur magni sint, modi voluptatibus tempora ea fugit, provident magnam et laboriosam totam porro pariatur odio ipsa! Excepturi voluptas accusantium, iure sit, itaque veniam nobis in dicta








                corporis molestiae necessitatibus quia ratione laborum. Iure harum alias a vero corrupti, repudiandae nostrum ratione quos perspiciatis quisquam tenetur atque necessitatibus exercitationem blanditiis aspernatur dignissimos ducimus maiores obcaecati qui assumenda totam ex! Amet et eligendi, magnam commodi reprehenderit cum sint magni excepturi maiores debitis totam iure minima, hic mollitia aperiam velit deserunt expedita laudantium tenetur deleniti, ad quaerat. Fugit accusantium libero, autem molestias recusandae nam, inventore distinctio commodi ab quidem, harum consequatur provident perspiciatis error iure sunt modi nisi vitae dicta dolorem. Aut, nostrum, inventore nihil beatae, molestiae sit ex autem hic nam dicta vero fugit quis atque adipisci consectetur quasi distinctio. Vero nihil in unde quisquam maxime illum commodi temporibus. Sequi, debitis eius. Veritatis aliquam non minima eos porro iusto, modi vitae ex, accusamus recusandae voluptates quod corporis sint fugit qui? Doloribus quasi aut recusandae. Soluta laboriosam rerum,




                a explicabo quis sequi tenetur architecto harum cupiditate magnam qui magni, veritatis, hic voluptatibus iure ea suscipit temporibus quo! Perferendis iusto mollitia fuga error a aut nobis earum maiores! Ipsum quaerat facere impedit cumque placeat officia aliquid, sapiente repellat omnis, eos tempora nobis quos. Aliquid, voluptas ab? Quae accusamus explicabo qui! Iusto consequatur a corrupti inventore illo fuga quae optio fugiat perspiciatis, aliquam mollitia obcaecati voluptatem, voluptatum facere doloribus magni, dolorum doloremque. Quod dolore rerum, veritatis cum saepe illum animi. Odio, sunt dolor. Natus dolore dicta in quidem rem obcaecati, nisi cumque eligendi quis possimus debitis consectetur delectus officiis cum. Quo necessitatibus quia accusantium, maxime voluptate aspernatur, pariatur nam eveniet natus praesentium iure? Eveniet nihil fuga dolores, at quibusdam possimus in unde. Distinctio architecto ducimus aliquid obcaecati provident quidem recusandae numquam ad! Aspernatur molestiae fuga nam, rem ex omnis ad explicabo sed earum minus ut natus perferendis quos molestias ipsam consequuntur dolore deleniti at distinctio maxime? Beatae optio, sunt est aliquid aspernatur aperiam, obcaecati iste corporis magni odio repudiandae facilis minus ratione perferendis quam vero sint at rerum rem consequuntur.
            </p>
        </>
    );
};

export default ScrollIndicator;

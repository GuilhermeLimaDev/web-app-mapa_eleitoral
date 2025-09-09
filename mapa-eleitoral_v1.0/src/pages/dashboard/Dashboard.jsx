import Candidate from "../../components/candidate/Candidate"
import Card from "../../components/card/Card";
import Menu from "../../components/menu/Menu"
import styles from './Dashboard.module.css'

const Dashboard = () => {  
    const candidato = {
    nome: "João da Silva",
    foto: "https://www.bing.com/images/search?view=detailV2&ccid=u6%2b2UR%2bf&id=9654FA92F1282871323EC050818137CEC482E96A&thid=OIP.u6-2UR-fYy1lzcRie-2bUwHaE8&mediaurl=https%3a%2f%2fwww.tecnoveste.com.br%2fwp-content%2fuploads%2f2020%2f06%2fchristian-wiediger-8nXKXYdO-Wk-unsplash-1-scaled.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.bbafb6511f9f632d65cdc4627bed9b53%3frik%3daumCxM43gYFQwA%26pid%3dImgRaw%26r%3d0&exph=1707&expw=2560&q=foto&FORM=IRPRST&ck=45F097ECBA954A982875CF1EDC9C82AE&selectedIndex=8&itb=0&ajaxhist=0&ajaxserp=0",
    partido: "Partido da Esperança",
    anoEleicao: "2024",
    cargo: "Prefeito",
    turno: "2º Turno",
    local: "São Paulo - SP"
};

    return (
       <main>
        <header className={styles.header}>
            <Candidate candidato={candidato} />
            <Menu anos={{}} municipios={{}} candidatos={{}} turno={{}}/>
        </header>
        <article className={styles.content}>
         
            <div className={styles.columnOne}>
                <section className={styles.rows}>
                   <Card>
                        Total de Votos por Turno
                   </Card>
                    <Card>
                         <h3>Total Votos</h3>
                   </Card>
                    <Card>
                            <h3>Total Votos</h3>
                   </Card>
                    <Card>
                         Melhor Local
                   </Card>
                </section>

                <section className={styles.rows}>
                     <Card>
                        Votos por Seção
                     </Card>
                     <Card>
                        Locais com o melhor desempenho
                     </Card>
                </section>

                <section className={styles.rows}>
                    <Card>
                        Desempenho por zona ao longo dos anos
                    </Card>

                    <Card>
                        Desempenho total ao longo dos anos
                    </Card>
                </section>

            </div>

          
            <div className={styles.columnTwo}>
                  
                <Card>
                   Votos por Zona
                </Card>

                <Card>
                   Porcentagem dos Votos por turno
                </Card>
            </div>

        </article>
       </main>
    )
}

export default Dashboard
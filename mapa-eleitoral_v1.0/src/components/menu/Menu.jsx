import styles from './Menu.module.css';

const Menu = ({ anos, municipios, candidatos, turno }) => {
    return (
        <section className={styles.menuSection}>
            <label className={styles.title}>Opções:</label>
            <div className={styles.selectContainer}>
                  <select className={styles.select}>
                {anos && anos.length > 0 ? (
                    anos.map((ano) => (
                        <option key={ano} value={ano}>{ano}</option>
                    ))
                ) : (
                    <option disabled value="">Ano: Vazio</option>
                )}
            </select>

            <select className={styles.select}>
                {municipios && municipios.length > 0 ? (
                    municipios.map((municipio) => (
                        <option key={municipio} value={municipio}>{municipio}</option>
                    ))
                ) : (
                    <option disabled value="">Município: Vazio</option>
                )}
            </select>

            <select className={styles.select}>
                {candidatos && candidatos.length > 0 ? (
                    candidatos.map((candidato) => (
                        <option key={candidato} value={candidato}>{candidato}</option>
                    ))
                ) : (
                    <option disabled value="">Candidato: Vazio</option>
                )}
            </select>

            <select className={styles.select}>
                {turno && turno.length > 0 ? (
                    turno.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))
                ) : (
                    <option disabled value="">Turno: Vazio</option>
                )}
            </select>
            </div>
          
        </section>
    );
};

export default Menu;

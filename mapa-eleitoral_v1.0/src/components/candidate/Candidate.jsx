import styles from './Candidate.module.css';

const Candidate = ({ candidato }) => {
    const isCandidatoValido = candidato && candidato.nome && candidato.foto;

    return (
        <section className={styles.candidateSection}>
            {isCandidatoValido ? (
                <>
                    <div className={styles.imageContainer}>
                        <img
                            src={candidato.foto}
                            alt={candidato.nome}
                            className={styles.candidateImage}
                        />
                    </div>

                    <div className={styles.infoContainer}>
                        <h1 className={styles.candidateName}>{candidato.nome}</h1>
                        <h3 className={styles.candidateParty}>{candidato.partido || "Partido não informado"}</h3>
                        <p className={styles.candidateYear}>{candidato.anoEleicao || "Ano não informado"}</p>
                        <p className={styles.candidateRole}>{candidato.cargo || "Cargo não informado"}</p>
                        <p className={styles.candidateTurn}>{candidato.turno || "Turno não informado"}</p>
                        <p className={styles.candidateLocation}>{candidato.local || "Local não informado"}</p>
                    </div>
                </>
            ) : (
                <p className={styles.emptyMessage}>Dados do candidato indisponíveis.</p>
            )}
        </section>
    );
};

export default Candidate;

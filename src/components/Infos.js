import { useSelector } from 'react-redux';

const Infos = () => {
    const {count, score} = useSelector(state => state.calculReducer);
    
        return (
            <div className="card">
                <div className="card-header">
                Nombre de question(s) restantes : {count}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Score : {score}</li>
                </ul>
            </div>    
        )
   
}

export default Infos;
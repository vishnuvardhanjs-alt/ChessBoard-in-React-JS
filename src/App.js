import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessRook, faChessBishop, faChessQueen, faChessPawn,faChessKnight, faChessKing } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (    
    <div className="main-cont">
      <div className="chessboard">
        <table>
          <tr>
            <td className='white'><FontAwesomeIcon className='pieces' icon={faChessRook} /></td>
            <td className='green'><FontAwesomeIcon className='pieces' icon={faChessKnight} /></td>
            <td className='white'><FontAwesomeIcon className='pieces' icon={faChessBishop} /></td>
            <td className='green'><FontAwesomeIcon className='pieces' icon={faChessKing} /></td>
            <td className='white'><FontAwesomeIcon className='pieces' icon={faChessQueen} /></td>
            <td className='green'><FontAwesomeIcon className='pieces' icon={faChessBishop} /></td>
            <td className='white'><FontAwesomeIcon className='pieces' icon={faChessKnight} /></td>
            <td className='green'><FontAwesomeIcon className='pieces' icon={faChessRook} /></td>
          </tr>
          <tr>
            <td className='green'><FontAwesomeIcon className='pieces' icon={faChessPawn} /></td>
            <td className='white'><FontAwesomeIcon className='pieces' icon={faChessPawn} /></td>
            <td className='green'><FontAwesomeIcon className='pieces' icon={faChessPawn} /></td>
            <td className='white'><FontAwesomeIcon className='pieces' icon={faChessPawn} /></td>
            <td className='green'><FontAwesomeIcon className='pieces' icon={faChessPawn} /></td>
            <td className='white'><FontAwesomeIcon className='pieces' icon={faChessPawn} /></td>
            <td className='green'><FontAwesomeIcon className='pieces' icon={faChessPawn} /></td>
            <td className='white'><FontAwesomeIcon className='pieces' icon={faChessPawn} /></td>
          </tr>
          <tr>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
          </tr>
          <tr>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
          </tr>
          <tr>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
          </tr>
          <tr>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
            <td className='green'></td>
            <td className='white'></td>
          </tr>
          <tr>
            <td className='white'><FontAwesomeIcon className='pieces whp' icon={faChessPawn} /></td>
            <td className='green'><FontAwesomeIcon className='pieces whp' icon={faChessPawn} /></td>
            <td className='white'><FontAwesomeIcon className='pieces whp' icon={faChessPawn} /></td>
            <td className='green'><FontAwesomeIcon className='pieces whp' icon={faChessPawn} /></td>
            <td className='white'><FontAwesomeIcon className='pieces whp' icon={faChessPawn} /></td>
            <td className='green'><FontAwesomeIcon className='pieces whp' icon={faChessPawn} /></td>
            <td className='white'><FontAwesomeIcon className='pieces whp' icon={faChessPawn} /></td>
            <td className='green'><FontAwesomeIcon className='pieces whp' icon={faChessPawn} /></td>
          </tr>
          <tr>
            <td className='green'><FontAwesomeIcon className='pieces whp' icon={faChessRook} /></td>
            <td className='white'><FontAwesomeIcon className='pieces whp' icon={faChessKnight} /></td>
            <td className='green'><FontAwesomeIcon className='pieces whp' icon={faChessBishop} /></td>
            <td className='white'><FontAwesomeIcon className='pieces whp' icon={faChessQueen} /></td>
            <td className='green'><FontAwesomeIcon className='pieces whp' icon={faChessKing} /></td>
            <td className='white'><FontAwesomeIcon className='pieces whp' icon={faChessBishop} /></td>
            <td className='green'><FontAwesomeIcon className='pieces whp' icon={faChessKnight} /></td>
            <td className='white'><FontAwesomeIcon className='pieces whp' icon={faChessRook} /></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;

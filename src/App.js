import {useState} from 'react'
const App = ()=>{
  return <>
  <Board/>
  </>
}
export default App

const Board = ()=>{
  const [squares,setSquares]=useState(Array(9).fill(null))
  const [xIsNext,setXIsNext]= useState(true)

  const handleButtonClick = (i)=>{
    const newSettedSquares = [...squares]

    if(newSettedSquares[i] || ourWinner(squares)) return
    if(xIsNext){

      newSettedSquares[i]= 'X'
    } else{
      newSettedSquares[i]= 'O'
    }
    setSquares(newSettedSquares)
    setXIsNext(prev=>!prev)
  }
  const ourWinner = (squares)=>{
    const winSquares = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
    ]
for(const winSquare of winSquares){
  const [a,b,c] = winSquare
  if(squares[a] && squares[a]===squares[b] && squares[a] ===squares[c]){
    return squares[a]
  }
}
  return false
  }

  return<>
  <h2>{ourWinner(squares) ? `Winner is ${ourWinner(squares)}` : xIsNext ? "X's Turn" : "O's Turn" }</h2> 
  <div style={{display:'grid', gridTemplateColumns:'repeat(3,100px)',height:'300px'}}>
    
  {
    squares.map((square,i )=> 
    <button key={i} style={{font:'bold',fontSize:'20px'}} onClick={()=>handleButtonClick(i)}>
    {squares[i]}
    </button>)
  }
  </div>
  </>
}

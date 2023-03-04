import { useState } from 'react'


const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>

  )
}
const Header = ({text}) => {
  return (
    <h3> {text} </h3>
  )
}

const VotesInfo = ({id, votesAmount}) => {
  if (votesAmount === 0) {
    console.log('empty list')
    return (
      <p> No votes have been casted</p>
    )
  }
  return (
    <p> {id} has {votesAmount}</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const handleNext = () => {
    console.log('good');
    setSelected(prevSelected => {
      console.log('Previous good value:', prevSelected);
      const randomNumber = Math.floor(Math.random() * 8)
      console.log(randomNumber)
      return prevSelected = randomNumber;
    });
  }




  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })


  const handleVote = () => {
    console.log('voting')
    const copy = {...points}
    console.log({selected})
    console.log(copy[selected])
    copy[selected] += 1
    setPoints(copy)
    console.log({copy})
    console.log(copy[selected])
  }


  const hasMostVotes = () => {
    const copyOfPoints = {...points}
    let mostVotes = 0;
    let id = ''
for (let key in copyOfPoints) {
  if (points[key] > mostVotes) {
    id = key
    mostVotes = points[key];
  }
}
console.log('most')
console.log({id});
console.log(mostVotes);
console.log(points)
return { id, mostVotes}

 }

 const { id, mostVotes } = hasMostVotes();



  return (
    <div>



      <Header text = {'Anecdote of the day'} />
      {anecdotes[selected]}
      <div>
      <Button text = {'vote'} handleClick = {handleVote} />
      <Button text = {'next anecdote'} handleClick = {handleNext} />
      <Header text = {'Anecdote with the most votes'} />
      <VotesInfo id = {anecdotes[id]} votesAmount = {mostVotes} />

    </div>
    </div>
  )
}

export default App

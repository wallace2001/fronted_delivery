import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Header } from '../src/Fixed/Header';
import { Evaluation } from '../src/components/Evaluation';
import { useRouter } from 'next/router';
import db from '../pages/api/config.json';

export default function Home() {
  const [checked, setChecked] = useState(null);
  const [hover, setHover] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const img = db.bgMenu;

  const handleSubmit = (e) =>{
    e.preventDefault();


    if(checked && name && email && content){
      console.log(checked);
      console.log(name);
      console.log(email);
      console.log(content);
      setTimeout(() => {
        router.push('/evaluationok');
      }, 1 * 1000);
    }else{
      alert('Alguma informação faltando!');
    }
  }

  return (
    <>
        <Header />
        <Evaluation>
          <Evaluation.Bg backgroundImg={img} >
            <Evaluation.Content>
              <Evaluation.Box>
                <h2>AVALIAÇÃO</h2>
                <Evaluation.Name>
                  <label>Nome</label>
                  <input type="text" onChange={(e)=>setName(e.target.value)} />
                </Evaluation.Name>

                <Evaluation.email>
                  <label>E-mail</label>
                  <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                </Evaluation.email>

                <Evaluation.text>
                  <label>Comentário <strong>( *opcional )</strong></label>
                  <textarea type="text" onChange={(e)=>setContent(e.target.value)}/>
                </Evaluation.text>

                <Evaluation.Star>

                      {[...Array(5)].map((item, index) => {
                        const ratingValue = index + 1;
                        return(
                          <label key={index}>
                            <input 
                              type="radio" 
                              name="rating" 
                              value={ratingValue} 
                              onClick={() => setChecked(ratingValue)}
                               />
                            <FaStar 
                              className="star" 
                              size={25}
                              onMouseEnter={() => setHover(ratingValue)}
                              onMouseLeave={() => setHover(null)}
                              color={ratingValue <= (checked || hover) ? "#ffc107" : "#ccc"} />
                          </label>
                        );
                      })}

                </Evaluation.Star>
                <Evaluation.Button>
                  <button onClick={handleSubmit}>Enviar</button>
                </Evaluation.Button>
              </Evaluation.Box>
            </Evaluation.Content>
          </Evaluation.Bg>
        </Evaluation>
    </>
  )
}
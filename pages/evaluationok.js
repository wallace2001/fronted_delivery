import React from 'react'
import { Header } from '../src/Fixed/Header';
import { Evaluation } from '../src/components/Evaluation';
import { useRouter } from 'next/router';
import db from '../pages/api/config.json';

export default function index() {
    const router = useRouter();
    const img = db.bgMenu;
    return (
        <>
        <Header />
        <Evaluation>
          <Evaluation.Bg backgroundImg={img} >
            <Evaluation.Content>
              <Evaluation.Info>
                <h2>Avaliação enviada!</h2>
                <h3>Deseja voltar para o Menu ?</h3>
                <div>
                    <button onClick={() => router.push('/')} >Voltar</button>
                </div>
              </Evaluation.Info>
            </Evaluation.Content>
          </Evaluation.Bg>
        </Evaluation>
        </>
    )
}


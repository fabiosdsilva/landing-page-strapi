import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({
  title,
  description,
  image
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image src={getImageUrl(image.url)}></S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text>
            <p>
              Iremos criar um e-commerce de jogos, incluindo toda a parte de
              pagamentos e área do cliente. Os clientes poderão fazer buscas,
              filtrar, adicionar ao carrinho e comprar seus jogos favoritos.
            </p>

            <p>
              Teremos também um <strong>CMS completamente customizado</strong>{' '}
              para que os administradores possam adicionar produtos, categorias,
              plataformas, criar promoções, editar partes do site, além de
              emails automatizados para às vendas de cada produto.
            </p>

            <p>
              Para criar tudo isso, iremos utilizar ferramentas muito famosas no
              mercado de trabalho, como ReactJS, Next, Apollo e outras coisas
              mais. Sempre prezando pela qualidade do código, ou seja, teremos{' '}
              <strong>testes em tudo!</strong>
            </p>
          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject

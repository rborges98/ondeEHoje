'use server'

import connectToDatabase from '@/src/db'
import Places from '@/src/db/models/places'

export const getPlaces = async () => {
  try {
    await connectToDatabase()
    const places = await Places.find({})

    return JSON.parse(JSON.stringify({ data: places }))
  } catch (error) {
    console.log(error)
  }
}

export const add = async () => {
  try {
    await connectToDatabase()
    const places = [
      {
        name: 'Shopping Ilha Plaza',
        geo: {
          lat: -22.80178,
          lon: -43.20169
        },
        address: {
          street: 'Av. Maestro Paulo e Silva',
          number: '400',
          neighborhood: 'Jardim Carioca'
        },
        rating: 4,
        image:
          'https://www.intranetmall.com/esperienza/imgShopping/50/shopping/10-8-2023-ZM7PLAWY7J.jpg?v=24022023-1221'
      },
      {
        name: 'Gruta da Ilha',
        geo: {
          lat: -22.79703,
          lon: -43.19373
        },
        address: {
          street: 'Estrada do Dende',
          number: '1249',
          neighborhood: 'Jardim Carioca'
        },
        rating: 5,
        image:
          'https://scontent.fgig20-1.fna.fbcdn.net/v/t1.6435-9/119234105_4415760265162193_8629438898037517501_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=pwsetmfx7zMQ7kNvgGbClep&_nc_zt=23&_nc_ht=scontent.fgig20-1.fna&_nc_gid=Aio1FLX0PxtCQuiU7G0fPqS&oh=00_AYD9l7Mgbwuqflzfmz0NTgO5lfkd3hpPS0MrcXA-JWKXPQ&oe=674BBE5A'
      },
      {
        name: 'Quiosque Fim da Praia',
        geo: {
          lat: -22.8218,
          lon: -43.18948
        },
        address: {
          street: 'Av. Alm. Alves Camara Junior',
          number: 'S/N',
          neighborhood: 'Jardim Guanabara'
        },
        rating: 4,
        image:
          'https://diariodorio.com/wp-content/uploads/2021/10/Quiosque-Fim-da-Praia-Ilha-do-Governador-768x474.jpg'
      },
      {
        name: 'Brasa Gastronomia e Drinkeria',
        geo: {
          lat: -22.81847,
          lon: -43.20018
        },
        address: {
          street: 'Praça Jerusalem',
          number: '8',
          neighborhood: 'Jardim Guanabara'
        },
        rating: 3,
        image:
          'https://scontent.fgig20-1.fna.fbcdn.net/v/t1.6435-9/91995453_117446503241950_8088386929856348160_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=P9E0mYUhy3AQ7kNvgH6QrrT&_nc_zt=23&_nc_ht=scontent.fgig20-1.fna&_nc_gid=AxZEhSmdb-wcYWkXjz95VTv&oh=00_AYCcfurLn1R2Ef9S_vttdBNdN0UbmWlbRPr_5pzt3EaLog&oe=674BC1F7'
      },
      {
        name: 'Iate Clube Jardim Guanabara',
        geo: {
          lat: -22.81369,
          lon: -43.20744
        },
        address: {
          street: 'Rua Oreste Barbosa',
          number: '229',
          neighborhood: 'Jardim Guanabara'
        },
        rating: 5,
        image:
          'https://scontent.fgig20-1.fna.fbcdn.net/v/t39.30808-6/315393186_5676411855750667_30261273535416866_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=UtQONKeawFkQ7kNvgG7FhxX&_nc_zt=23&_nc_ht=scontent.fgig20-1.fna&_nc_gid=A4rMGxzGeoIUNQmj00IW6DF&oh=00_AYC3FsFmw_sDh5xYqYqSNn7JYOmeTEwSuFCIn9Ioubd47Q&oe=672A050E'
      },
      {
        name: 'União da Ilha do Governador',
        geo: {
          lat: -22.81356,
          lon: -43.18864
        },
        address: {
          street: 'Estrada do Galeão',
          number: '322',
          neighborhood: 'Cacuia'
        },
        rating: 4,
        image:
          'https://upload.wikimedia.org/wikipedia/pt/thumb/5/52/Bandeira_do_GRES_Uni%C3%A3o_da_Ilha_do_Governador.jpg/360px-Bandeira_do_GRES_Uni%C3%A3o_da_Ilha_do_Governador.jpg'
      },
      {
        name: 'Hamburguer do Rafa',
        geo: {
          lat: -22.57479,
          lon: -43.15615
        },
        address: {
          street: 'Rua Praia da Engenhoca',
          number: '73B',
          neighborhood: 'Ribeira'
        },
        rating: 5,
        image:
          'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e15e077554801.5c8aabf89c293.gif'
      },
      {
        name: 'Botequim Altas Horas',
        geo: {
          lat: -22.81834,
          lon: -43.19701
        },
        address: {
          street: 'Av. Alm. Alves Camara Junior',
          number: 'S/N',
          neighborhood: 'Jardim Guanabara'
        },
        rating: 5,
        image:
          'https://scontent.fgig20-1.fna.fbcdn.net/v/t39.30808-6/360107760_715493647254169_2781540237152860837_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=x5tTmdY-8JcQ7kNvgG2zxTZ&_nc_zt=23&_nc_ht=scontent.fgig20-1.fna&_nc_gid=A4AEknwGFEuEFWlz7hPKzsi&oh=00_AYAAF3EwBs0154saPwnZ9XLgp8wcHIM7tevIFHm6tyIIQA&oe=672A1C1B'
      },
      {
        name: 'Nautilus Festas e Eventos',
        geo: {
          lat: -22.78961,
          lon: -43.16361
        },
        address: {
          street: 'Praia da Guanabara',
          number: '1227',
          neighborhood: 'Freguesia'
        },
        rating: 3,
        image:
          'https://cdn0.casamentos.com.br/vendor/6207/original/1280/jpg/photo-2020-10-12-20-31-01_13_106207-162558645285600.webp'
      },
      {
        name: 'Beer 16 Petiscaria',
        geo: {
          lat: -22.79917,
          lon: -43.1973
        },
        address: {
          street: 'Estr. Gov. Chagas Freitas',
          number: '496',
          neighborhood: 'Moneró'
        },
        rating: 5,
        image:
          'https://scontent.fgig20-1.fna.fbcdn.net/v/t39.30808-6/308498253_534207972038506_8114800982247406397_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=B5s9-WuypN4Q7kNvgHkK9lg&_nc_zt=23&_nc_ht=scontent.fgig20-1.fna&_nc_gid=ASBw2ugcN9eC4id5U1TWokB&oh=00_AYC7vHTVqGzrlNqmWEe8ZVY9Bp1mQbXGEjm3AIZd1sA8aA&oe=672A1DDF'
      }
    ]

    Places.insertMany(places)
  } catch (error) {
    console.log(error)
  }
}

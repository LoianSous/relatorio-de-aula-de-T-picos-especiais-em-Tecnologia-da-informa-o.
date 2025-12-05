import { Calendar, BookOpen, CheckCircle2, XCircle, Users, FileText, Code, Trophy, Coffee } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string[];
  type: 'class' | 'evaluation' | 'no-class' | 'important';
  icon: React.ReactNode;
}

function App() {
  const events: TimelineEvent[] = [
    {
      date: '22/08/2025',
      title: 'Aula Inicial - Informações da Disciplina',
      description: [
        'Média simples: (N1 + N2) / 2',
        'Sem peso nas avaliações',
        'Prova de recuperação: 19/12/2025',
        'A sala decidiu as formas de avaliação'
      ],
      type: 'important',
      icon: <Trophy className="w-5 h-5" />
    },
    {
      date: '05/09/2025',
      title: 'Defesa da Linguagem Go',
      description: [
        'Faltei',
        'Foi passado para defender a linguagem Go comparando com outra linguagem',
        'Indicação do site: https://gobyexample.com para estudar exemplos em Go'
      ],
      type: 'class',
      icon: <Code className="w-5 h-5" />
    },
    {
      date: '12/09/2025',
      title: 'Otimização e Programação Concorrente',
      description: [
        'Tiradas dúvidas dos estudantes',
        'Explicado sobre processamento na programação',
        'Programação concorrente e paralelismo',
        'Padrões de programação para código mais limpo e eficiente'
      ],
      type: 'class',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      date: '19/09/2025',
      title: 'Sem Aula',
      description: ['Não teve aula'],
      type: 'no-class',
      icon: <XCircle className="w-5 h-5" />
    },
    {
      date: '26/09/2025',
      title: 'Andamento dos Portfólios',
      description: ['Acompanhamento do desenvolvimento dos portfólios'],
      type: 'class',
      icon: <FileText className="w-5 h-5" />
    },
    {
      date: '29/09/2025',
      title: 'Lista de Exercícios Práticos',
      description: [
  '25 exercícios propostos, incluindo:',
  '1. Soma de dois números',
  '2. Divisão de 2 números inteiros',
  '3. Imprimir antecessor e sucessor',
  '4. Verificar se é par/ímpar e positivo/negativo',
  '5. Verificar se é primo',
  '6. Ordenação de uma sequência numérica',
  '7. Ordenação de caracteres em ordem ascendente',
  '8. Árvore de decisão',
  '9. Imprimir o valor e endereço de uma variável',
  '10. Resolver os 3 discos (Torres de Hanoi)',
  '11. Dada a data de nascimento, descobrir o dia da semana',
  '12. Algoritmo booleano verificando igualdade entre 2 números',
  '13. Retornar a moda de uma sequência numérica',
  '14. Verificar se uma sequência de caracteres é palíndromo',
  '15. Calcular a área de um retângulo',
  '16. Conversão entre unidades de temperatura',
  '17. Simular o jogo da adivinhação',
  '18. Combinar três matrizes uint8 e gravar um JPG no disco',
  '19. Contar vogais e consoantes de uma palavra',
  '20. Contar ocorrências de uma palavra em um texto',
  '21. Calcular fatorial de n',
  '22. Imprimir "Hello world"',
  '23. Cálculo do índice de massa corporal (IMC)',
  '24. Calcular MMC entre dois números',
  '25. Calcular a média entre 2 ou mais números'
],

      type: 'class',
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      date: '03/10/2025',
      title: 'Sem Aula',
      description: ['Não teve aula, atestado'],
      type: 'no-class',
      icon: <XCircle className="w-5 h-5" />
    },
    {
      date: '10/10/2025',
      title: 'Finalização de Exercícios',
      description: ['Solicitação para finalizar os exercícios anteriores'],
      type: 'class',
      icon: <Code className="w-5 h-5" />
    },
    {
      date: '17/10/2025',
      title: 'Leitura de Arquivos PPM',
      description: [
        'Exercício para ler arquivos no Golang',
        'Trabalhar com imagens PPM',
        'Ler arquivo PPM no bloco de notas com Golang e apresentar resultado'
      ],
      type: 'class',
      icon: <FileText className="w-5 h-5" />
    },
    {
      date: '24/10/2025',
      title: 'Revisão de Conceitos',
      description: [
        'Revisão sobre: for, if, else',
        'panic, defer, recover',
        'Worker pools, Switch',
        'Arrays, Maps, Pointers, Struct',
        'Explicação sobre árvore de decisões'
      ],
      type: 'class',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      date: '31/10/2025',
      title: 'Recesso',
      description: ['Não teve aula - recesso'],
      type: 'no-class',
      icon: <Coffee className="w-5 h-5" />
    },
    {
      date: '07/11/2025',
      title: 'Palestra e Formatura',
      description: [
        'Palestra sobre consciência negra',
        'Formatura do TADS'
      ],
      type: 'class',
      icon: <Users className="w-5 h-5" />
    },
    {
      date: '21/11/2025',
      title: 'Recesso',
      description: ['Recesso'],
      type: 'no-class',
      icon: <Coffee className="w-5 h-5" />
    },
    {
      date: '28/11/2025',
      title: 'Avaliação N1 - Portfólio',
      description: [
        'Relatório de tudo que aconteceu durante o período',
        'Qualquer tecnologia pode usar',
        'Documento com visão geral do semestre',
        'Incluir: atividades, falas, datas em ordem cronológica',
        'Fazer relatório de todas as aulas'
      ],
      type: 'evaluation',
      icon: <FileText className="w-5 h-5" />
    },
    {
      date: '05/12 e 12/12/2025',
      title: 'Avaliação N2 - Apresentação do Projeto',
      description: [
        'Projeto em equipes de 4 pessoas ou individual',
        'Programação concorrente com Go Lang',
        '⚠️ NÃO pode usar IA - Nota 0 se houver indícios',
        'Gravar toda a programação como diário de bordo'
      ],
      type: 'evaluation',
      icon: <Trophy className="w-5 h-5" />
    },
    {
      date: '19/12/2025',
      title: 'Prova de Recuperação',
      description: ['Prova final para recuperação'],
      type: 'evaluation',
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  const getEventStyles = (type: string) => {
    switch (type) {
      case 'evaluation':
        return 'bg-gradient-to-br from-red-50 to-orange-50 border-red-300 shadow-red-100';
      case 'important':
        return 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 shadow-blue-100';
      case 'no-class':
        return 'bg-gradient-to-br from-gray-50 to-slate-50 border-gray-300 shadow-gray-100';
      default:
        return 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 shadow-green-100';
    }
  };

  const getIconStyles = (type: string) => {
    switch (type) {
      case 'evaluation':
        return 'bg-red-500 text-white';
      case 'important':
        return 'bg-blue-500 text-white';
      case 'no-class':
        return 'bg-gray-400 text-white';
      default:
        return 'bg-green-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Tópicos especiais em Tecnologia da informação.
          </h1>
          <p className="text-xl text-gray-600">Go Lang - Cronograma do Semestre</p>
          <div className="mt-6 inline-block px-6 py-3 bg-blue-100 rounded-full">
            <p className="text-sm text-blue-800 font-medium">
              Média: (N1 + N2) / 2 | Recuperação: 19/12/2025
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-green-300 to-red-300"></div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative pl-20">
                <div className={`absolute left-4 p-3 rounded-full ${getIconStyles(event.type)} shadow-lg transform transition-transform hover:scale-110`}>
                  {event.icon}
                </div>

                <div className={`p-6 rounded-xl border-2 ${getEventStyles(event.type)} shadow-lg transform transition-all hover:scale-[1.02] hover:shadow-xl`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {event.title}
                    </h3>
                    <span className="text-sm font-semibold text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
                      {event.date}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {event.description.map((desc, i) => (
                      <li key={i} className="text-gray-700 leading-relaxed flex items-start">
                        <span className="mr-2 text-gray-400">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600">{events.filter(e => e.type === 'class').length}</div>
              <div className="text-sm text-gray-600">Aulas</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-red-600">{events.filter(e => e.type === 'evaluation').length}</div>
              <div className="text-sm text-gray-600">Avaliações</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-gray-600">{events.filter(e => e.type === 'no-class').length}</div>
              <div className="text-sm text-gray-600">Sem Aula</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600">{events.length}</div>
              <div className="text-sm text-gray-600">Total Eventos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

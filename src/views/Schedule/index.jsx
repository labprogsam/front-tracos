import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Tatoo1 from "../../assets/Schedule/tatuagem-1.jpg";
import Tatoo2 from "../../assets/Schedule/caveira.jpg";
import Tatoo3 from "../../assets/Schedule/old-school.jpg";
import Tatoo4 from "../../assets/Schedule/surrealista.jpg";
import Client1 from "../../assets/Schedule/bmo-min.png";
import Client2 from "../../assets/Schedule/finn-min.png";
import Client3 from "../../assets/Schedule/jake-min.png";
import Client4 from "../../assets/Schedule/princess-min.png";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Column from "./Column";
import { useState } from "react";
import {
  StyledColumns,
  MainContainer,
  StyledModalContent,
  StyledModalTitle,
  StyledModalText,
  StyledMultipleInputs,
} from "./styles";
import { Download } from "@mui/icons-material";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const data = [
    {
      id: "Pendentes",
      title: "Novos Contatos",
      cards: [
        {
          id: "Card1",
          name: "Samuel Miranda",
          reference: Tatoo1,
          age: 32,
          phone: "(81) 99878-0908",
          photo: Client1,
          resume:  "Tô querendo fazer uma tattoo nova e achei seu trampo incrível, principalmente no estilo realismo, que é exatamente o que tô procurando. Queria ver contigo se rola de criar uma arte original baseada numa ideia que tive."
        },
        {
          id: "Card2",
          name: "Juliana Serafim",
          reference: Tatoo4,
          age: 20,
          phone: "(81) 99878-0908",
          photo: Client2,
          resume:  "Oi, tudo bem? Me chamo Samuel e tô querendo marcar uma tattoo com você. Vi seus trabalhos e curti muito o estilo! Gosto bastante de arte surrealista, e queria ver contigo a possibilidade de desenvolver um desenho nessa pegada. A ideia que eu tenho é a seguinte: quero uma tatuagem que represente a mistura entre tempo e natureza, mas de uma forma bem abstrata e surreal. Pensei em uma ampulheta flutuando, com a areia sendo substituída por galhos secos e folhas caindo."
        },
      ],
    },
    {
      id: "Em contato",
      title: "Em contato",
      cards: [
        {
          id: "Card3",
          name: "José Luiz",
          reference: Tatoo3,
          age: 19,
          phone: "(81) 99878-0908",
          photo: Client3,
          resume:  "E aí, tudo certo? Tô entrando em contato porque quero fechar uma tattoo contigo. Vi que você manda muito bem no estilo old school, e tô com uma ideia que acho que combina bastante com esse traço mais tradicional. Quero fazer uma tatuagem de um navio em alto-mar, todo no estilo old school clássico — bem bold lines, cores vibrantes, aquele clima meio nostálgico."
        },
        {
          id: "Card4",
          name: "Yasmin Sales",
          reference: Tatoo2,
          age: 25,
          phone: "(81) 99878-0908",
          photo: Client4,
          resume:  "Pensei em uma tatuagem de um gatinho astronauta flutuando no espaço, com aquela vibe bem fofa e engraçada. Imagina ele dentro de um capacete redondo meio exagerado, com a carinha espremida no vidro, expressão curiosa e uma patinha tentando “alcançar” uma fatia de pizza que também tá flutuando perto dele."
        },
      ],
    },
    {
      id: "Confirmados",
      title: "Confirmados",
      cards: [],
    },
  ];
  const [columns, setColumns] = useState(data);
  const [formulario, setFormulario] = useState(undefined);

  const handleClick = (id) => {
    setFormulario(id);
  };

  const handleClose = () => {
    setFormulario(undefined);
  };

  const findColumn = (unique) => {
    if (!unique) {
      return null;
    }
    if (columns.some((c) => c.id === unique)) {
      return columns.find((c) => c.id === unique) ?? null;
    }
    const id = String(unique);
    const itemWithColumnId = columns.flatMap((c) => {
      const columnId = c.id;
      return c.cards.map((i) => ({ itemId: i.id, columnId: columnId }));
    });
    const columnId = itemWithColumnId.find((i) => i.itemId === id)?.columnId;
    return columns.find((c) => c.id === columnId) ?? null;
  };

  const handleDragOver = (event) => {
    const { active, over, delta } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;
    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);
    if (!activeColumn || !overColumn || activeColumn === overColumn) {
      return null;
    }
    setColumns((prevState) => {
      const activeItems = activeColumn.cards;
      const overItems = overColumn.cards;
      const activeIndex = activeItems.findIndex((i) => i.id === activeId);
      const overIndex = overItems.findIndex((i) => i.id === overId);
      const newIndex = () => {
        const putOnBelowLastItem =
          overIndex === overItems.length - 1 && delta.y > 0;
        const modifier = putOnBelowLastItem ? 1 : 0;
        return overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      };
      return prevState.map((c) => {
        if (c.id === activeColumn.id) {
          c.cards = activeItems.filter((i) => i.id !== activeId);
          return c;
        } else if (c.id === overColumn.id) {
          c.cards = [
            ...overItems.slice(0, newIndex()),
            activeItems[activeIndex],
            ...overItems.slice(newIndex(), overItems.length),
          ];
          return c;
        } else {
          return c;
        }
      });
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;
    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);
    if (!activeColumn || !overColumn || activeColumn !== overColumn) {
      return null;
    }
    const activeIndex = activeColumn.cards.findIndex((i) => i.id === activeId);
    const overIndex = overColumn.cards.findIndex((i) => i.id === overId);
    if (activeIndex !== overIndex) {
      setColumns((prevState) => {
        return prevState.map((column) => {
          if (column.id === activeColumn.id) {
            column.cards = arrayMove(overColumn.cards, activeIndex, overIndex);
            return column;
          } else {
            return column;
          }
        });
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <MainContainer>
      <h1>Agendamentos</h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        autoScroll={false}
      >
        <StyledColumns>
          {columns.map((column) => (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              cards={column.cards}
              handleClick={handleClick}
            ></Column>
          ))}
        </StyledColumns>
      </DndContext>
      <Dialog
        fullWidth
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "900px",
            },
          },
        }}
        id="card-dialog"
        open={formulario !== undefined}
        onClose={handleClose}
      >
        <StyledModalContent>
          <StyledModalTitle>Formulário</StyledModalTitle>
          <StyledMultipleInputs>
            <div id="margin-right">
              <TextField
                disabled
                fullWidth
                label="Nome completo"
                size="small"
                variant="outlined"
                margin="normal"
                color="secondary"
                value="Samuel Oliveira de Miranda"
              />
            </div>
            <div id="minor-side">
              <div id="margin-right">
                <TextField
                  disabled
                  fullWidth
                  label="Idade"
                  size="small"
                  variant="outlined"
                  margin="normal"
                  color="secondary"
                  value={30}
                />
              </div>
              <TextField
                disabled
                fullWidth
                label="Telefone"
                size="small"
                variant="outlined"
                margin="normal"
                color="secondary"
                value="(81) 99608-9701"
              />
            </div>
          </StyledMultipleInputs>
          <StyledMultipleInputs>
            <div id="minor-side">
              <div id="margin-right">
                <TextField
                  disabled
                  fullWidth
                  label="Estilo da Tatuagem"
                  size="small"
                  variant="outlined"
                  margin="normal"
                  color="secondary"
                  value="Surrealismo"
                />
              </div>
              <div id="margin-right">
                <TextField
                  disabled
                  fullWidth
                  label="Região do corpo"
                  size="small"
                  variant="outlined"
                  margin="normal"
                  color="secondary"
                  value="Peitoral"
                />
              </div>
            </div>
            <div id="minor-side">
              <div id="margin-right">
                <TextField
                  disabled
                  fullWidth
                  label="Tamanho"
                  size="small"
                  variant="outlined"
                  margin="normal"
                  color="secondary"
                  value="30cm"
                />
              </div>
              <TextField
                disabled
                fullWidth
                label="Data desejada"
                size="small"
                variant="outlined"
                margin="normal"
                color="secondary"
                value="25/04/2025"
              />
            </div>
          </StyledMultipleInputs>
          <TextField
            disabled
            fullWidth
            label="Possui alergia ou necessidades especiais?"
            size="small"
            variant="outlined"
            margin="normal"
            color="secondary"
            value="Sim, alergia a pigmento vermelho e a lâmina de barbear"
          />
          <TextField
            disabled
            fullWidth
            label="Informações Adicionais"
            size="small"
            variant="outlined"
            margin="normal"
            color="secondary"
            multiline
            rows={4}
            value="Oi, tudo bem? Me chamo Samuel e tô querendo marcar uma tattoo com você. Vi seus trabalhos e curti muito o estilo! Gosto bastante de arte surrealista, e queria ver contigo a possibilidade de desenvolver um desenho nessa pegada. A ideia que eu tenho é a seguinte: quero uma tatuagem que represente a mistura entre tempo e natureza, mas de uma forma bem abstrata e surreal. Pensei em uma ampulheta flutuando, com a areia sendo substituída por galhos secos e folhas caindo."
          />
          <Link  to="/files/myfile.pdf" target="_blank" download>
            <Button id="referencias-visuais" variant="contained" fullWidth startIcon={<Download />}>
              Referências Visuais
            </Button>
          </Link>
          <Button disabled id="validation" variant="contained" fullWidth startIcon={<Download />}>
            Autorização de Tatuagem para Menores
          </Button>
        </StyledModalContent>
      </Dialog>
    </MainContainer>
  );
}

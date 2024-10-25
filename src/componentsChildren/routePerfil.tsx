import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RisingDemo from "@/components/ui/sound";
import { Paper } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";


export function Perfil() {
const [useCount, setCount] = useState(0);

  return (
    <>
      <Paper
        sx={{

          p: 4,
          margin: "auto",
          maxWidth: "100%",
          backgroundColor: "#fff",
        }}
      >
        <div>
          <div className="flex justify-between ">
            <Avatar>
              <AvatarImage src="/src/assets/thumb-1920-365264.jpeg" />
              <AvatarFallback>c</AvatarFallback>
            </Avatar>
                    <div className="flex flex-col text-center" >
                    <p className="p-3">
                     <strong>Patricio0022</strong>
                    </p>
                    <p className="text-lg text-gray-700">
                        👨‍💻 Desenvolvedor Full Stack | ☕ Java  & React ⚛️ | 🚀 Apaixonado
                        por tecnologia e soluções criativas | 🎮 Gamer nas horas vagas | 🎯 Sempre
                        em busca de novos desafios e aprendizados | 💡 Inovação é o que me move!
                    </p>
            </div>


          </div>

            <div className=" flex justify-center p-2 max-w-[170px] ">

                        <div className=" pt-2 flex flex-col ">
                <Button
                        sx={{
                        maxWidth: 50,   
                        borderColor: 'black', color: 'black' }}
                        variant="outlined"
                        onClick={() => setCount(useCount + 1)} 
                        >
                        {useCount} 
                </Button>
                <h1>Followers: {useCount}</h1>

                        </div>
            </div>

          <div className="flex p-3 justify-center">
            <RisingDemo /> {/* this is the button that will play the sound file */}
          </div>
        </div>
      </Paper>
      
    </>
  );
}

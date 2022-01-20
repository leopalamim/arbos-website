/* eslint-disable react/display-name */
import { Image } from "./image.component";

import clockIcon from "@assets/img/ic-clock.png";
import dollarIcon from "@assets/img/ic-dollar.png";
import giftIcon from "@assets/img/ic-gift.png";
import lettuceIcon from "@assets/img/ic-lettuce.png";
import noChemicalIcon from "@assets/img/ic-non-toxic.png";
import sprout from "@assets/img/ic-sprout.png";
import truck from "@assets/img/ic-truck.png";
import worldIcon from "@assets/img/ic-world.png";

import arugula from "@assets/img/img-arugula.png";
import garden from "@assets/img/img-garden.png";
import harvest from "@assets/img/img-harvest.png";
import hub from "@assets/img/img-hub.jpg";
import hubFull from "@assets/img/img-hub-full.png";
import leaf from "@assets/img/img-leaf.png";
import lettuce from "@assets/img/img-lettuce.png";
import logoArbos from "@assets/img/img-logo.png";
import muda from "@assets/img/img-muda.png";
import salad from "@assets/img/img-salad.png";

export const ImageObj = {
  ClockIcon: () => <Image src={clockIcon} alt={"Relógio"} width={"50px"} height={"50px"} />,
  DollarIcon: () => <Image src={dollarIcon} alt={"Moeda"} width={"50px"} height={"50px"} />,
  GiftIcon: () => <Image src={giftIcon} alt={"Presente"} width={"50px"} height={"50px"} />,
  LettuceIcon: () => <Image src={lettuceIcon} alt={"Alface"} width={"50px"} height={"50px"} />,
  NoChemicalIcon: () => <Image src={noChemicalIcon} alt={"Sem químicos"} width={"50px"} height={"50px"} />,
  Sprout: () => <Image src={sprout} alt={"Muda"} width={"50px"} height={"50px"} />,
  Truck: () => <Image src={truck} alt={"Caminhão"} width={"50px"} height={"50px"} />,
  WorldIcon: () => <Image src={worldIcon} alt={"Planeta"} width={"50px"} height={"50px"} />,

  Garden: () => <Image src={garden} alt={"Jardim"} width={"436px"} height={"370px"} />,
  Harvest: () => <Image src={arugula} alt={"Colheita"} width={"350px"} height={"350px"} />,
  Hub: () => <Image src={hub} alt={"Hub"} width={"360px"} height={"542px"} />,
  HubFull: () => <Image src={hubFull} alt={"Hub"} width={"450px"} height={"450px"} />,
  Leaf: () => <Image src={leaf} alt={"Folha"} width={"106px"} height={"150px"} />,
  Lettuce: () => <Image src={lettuce} alt={"Alface"} width={"450px"} height={"450px"} />,
  LogoArbos: () => <Image src={logoArbos} alt={"Logo da Arbos"} width={"70px"} height={"70px"} />,
  Salad: () => <Image src={salad} alt={"Salada"} width={"500px"} height={"500px"} />,
};

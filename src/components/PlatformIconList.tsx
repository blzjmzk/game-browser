import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //przyporządkowujemy ikony nazwom platform. Nie robimy ifami, ale uzyjemy obiektu jako mapy
  //mapujemy slug'i, poniewaz nie powinny się zmieniać
  const iconMap: { [key: string]: IconType } = {
    //index signuture (niezaleznie od nazw key) dla typescripta + typ keys z biblioteki ikon
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {/* wyświetlamy ikony horyzontalnie + verical margin 1x theme space*/}
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
        // <Text>{platform.name}</Text> -> wyświetlanie nazw platform
      ))}
    </HStack>
  );
};

export default PlatformIconList;

// utils/BackgroundVariants.js (эсвэл .tsx)
import Iridescence from "@/app/utils/Iridescence";
import LiquidChrome from "@/app/utils/LiquidChrome";
import Aurora from "@/app/utils/Aurora";
import Particles  from "@/app/utils/Particles";


const backgroundVariants = [
  <Iridescence color={[1, 1, 1]} mouseReact={false} amplitude={0.1} speed={1.0} />,
  <LiquidChrome
    baseColor={[0.5, 0.3, 0.4]}
    speed={0.35}
    amplitude={0.6}
    interactive={true}
  />,

  <Particles
    particleColors={['#ff7ad5', '#ffffff']}
    particleCount={300}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={500}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
];

export default backgroundVariants;

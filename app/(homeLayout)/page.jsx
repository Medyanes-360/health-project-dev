import AssistantChat from "@/components/assistant/assistantChat";
import HomeContainer from "@/containers/home";

export default function Home() {
  return (
    <div>
      <HomeContainer />
      <div className="relative min-h-screen">
        {/* Sağlık Turizmi Chat Asistanı */}
        <AssistantChat />
      </div>
    </div>
  );
}

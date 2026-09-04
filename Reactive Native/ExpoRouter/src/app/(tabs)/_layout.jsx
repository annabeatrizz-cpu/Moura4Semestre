import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "#666",
                tabBarStyle: {
                    height: 65,
                    paddingBottom: 8,
                    paddingTop: 6,
                    borderTopWidth: 1,
                    borderTopColor: "#E5E5E5",
                    backgroundColor: "#FFFFFF",
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Minhas OS",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="document-text-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="criar-os"
                options={{
                    title: "Criar OS",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="notificacoes"
                options={{
                    title: "Notificações",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="notifications-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="perfil"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="person-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
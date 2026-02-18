"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, CloudRain, Sun, CloudFog, CloudLightning, CloudSnow } from "lucide-react";

interface WeatherData {
  temperature: number;
  weatherCode: number;
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Purbalingga Coordinates: -7.3936, 109.3633 (approx)
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-7.3936&longitude=109.3633&current=temperature_2m,weather_code&timezone=auto"
        );
        const data = await response.json();
        setWeather({
          temperature: data.current.temperature_2m,
          weatherCode: data.current.weather_code,
        });
      } catch (error) {
        console.error("Failed to fetch weather", error);
      }
    };

    fetchWeather();
    // Refresh every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (code: number) => {
    if (code === 0 || code === 1) return <Sun className="text-yellow-500" size={16} />;
    if (code === 2 || code === 3) return <Cloud className="text-gray-400" size={16} />;
    if (code >= 45 && code <= 48) return <CloudFog className="text-gray-300" size={16} />;
    if (code >= 51 && code <= 67) return <CloudRain className="text-blue-400" size={16} />;
    if (code >= 71 && code <= 77) return <CloudSnow className="text-white" size={16} />;
    if (code >= 80 && code <= 82) return <CloudRain className="text-blue-500" size={16} />;
    if (code >= 95) return <CloudLightning className="text-purple-500" size={16} />;
    return <Sun className="text-yellow-500" size={16} />;
  };

  if (!weather) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-lg"
    >
      {getWeatherIcon(weather.weatherCode)}
      <div className="flex flex-col text-[10px] leading-tight text-foreground/80">
        <span className="font-semibold">Purbalingga, ID</span>
        <span>{weather.temperature}°C</span>
      </div>
    </motion.div>
  );
}

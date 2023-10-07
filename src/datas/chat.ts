import { SimulationSpecificationProps } from '@/contexts/SimulationContext';
import { type } from 'os';
import { SetStateAction } from 'react';

export type ChatMessage = {
  message: string;
  function?: SimulationSpecificationProps;
  explanation?: string;
};

export const Chatlist: ChatMessage[] = [
  {
    message:
      "Welcome! Let's start with the basics of celestial motion. Would you like to learn about how the Moon rotates or how the Earth rotates and revolves around the Sun?",
    explanation:
      "In this chat, we'll explore the fascinating world of celestial motion. You can choose to learn about the Moon's rotation or how the Earth rotates and orbits the Sun.",
  },
  {
    message: "I'd like to learn about how the Moon rotates.",
    function: {
      earth: {
        theta: 0,
        x: 0,
        y: 0,
        z: 1000,
        stop_rot: true,
        stop_rev: true,
      },
      moon: {
        theta: 0,
        x: 0,
        y: 0,
        z: 2000,
        stop_rot: true,

        stop_rev: false,
      },
      sun: {},
    },
    explanation:
      "Great choice! We'll begin by understanding how the Moon rotates on its axis.",
  },
  {
    message: 'Tell me about how the Earth rotates and revolves around the Sun.',
    explanation:
      "Sure! Let's delve into how the Earth rotates on its axis and orbits the Sun.",
  },
  {
    message: 'How does the Moon rotate?',
    explanation:
      "The Moon rotates on its axis, but did you know that it also has a synchronous rotation with Earth? We'll explore this phenomenon.",
  },
  {
    message:
      "Why does the Earth rotate, and what's its orbit around the Sun like?",
    explanation:
      "Earth's rotation is caused by its formation, and its orbit around the Sun has some interesting characteristics. Let's learn more!",
  },
  {
    message: "What are the effects of Earth's rotation and revolution?",
    explanation:
      "Earth's motions have several effects on our planet, affecting day and night, seasons, and more. Let's explore these effects.",
  },
  {
    message: 'Tell me more about the phases of the Moon.',
    explanation:
      "Certainly! We'll dive into the different phases of the Moon and what causes them.",
  },
  {
    message: 'How are eclipses related to celestial motion?',
    explanation:
      "Eclipses are fascinating celestial events closely tied to the motions of the Moon and Earth. Let's uncover their connections.",
  },
  {
    message: 'What is a lunar eclipse?',
    explanation:
      "Lunar eclipses occur when the Earth comes between the Sun and the Moon. Let's explore how and why this happens.",
  },
  {
    message: 'Explain solar eclipses.',
    explanation:
      "Solar eclipses happen when the Moon passes between the Earth and the Sun, casting a shadow on our planet. Let's understand this phenomenon.",
  },
  {
    message: 'How can I safely view a solar eclipse?',
    explanation:
      "Viewing a solar eclipse can be thrilling, but it's important to do it safely. We'll discuss the precautions you should take.",
  },
  {
    message: 'What are the different types of lunar eclipses?',
    explanation:
      "Lunar eclipses come in various types, including penumbral, partial, and total. Let's distinguish between them.",
  },
  {
    message: 'Tell me about the rare phenomena like total solar eclipses.',
    explanation:
      "Total solar eclipses are rare and awe-inspiring events. We'll explore what makes them so special.",
  },
  {
    message: 'Thanks for all the information!',
    explanation:
      "You're welcome! If you have more questions or want to dive deeper into any topic, feel free to ask. Enjoy your journey through the cosmos!",
  },
];

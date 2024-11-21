import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { primitives } from '../../theme/primitives';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PayrollInfoCard from '../PayrollInfoCard/PayrollInfoCard';
import ThinkingMessage from '../ThinkingMessage/ThinkingMessage';

interface PayrollCardData {
  type: 'payroll-card';
  title: string;
  variable: string;
  explanation: string;
}

interface TextMessage {
  type: 'text';
  content: string;
  sender: 'human' | 'ai';
}

interface ThinkingMessageData {
  type: 'thinking';
}

type Message = TextMessage | PayrollCardData | ThinkingMessageData;

interface RightAssistantPanelProps {
  messages: Message[];
  onWidthChange: (width: number) => void;
}

const Wrapper = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 340px;
  min-width: 340px;
  display: flex;
  z-index: 1000;
`;

const ResizeHandle = styled('div')`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8px;
  background: transparent;
  transform: translateX(-50%);
  transition: background 0.2s;
  cursor: col-resize;
  z-index: 1;
  
  &:hover {
    background: ${primitives.colors.brand[300]};
    opacity: 0.2;
  }
`;

const TabsContainer = styled('div')`
  display: flex;
  align-items: center;
  padding: 24px 16px 8px;
  gap: 24px;
  position: relative;
`;

const IconWrapper = styled('div')`
  display: flex;
  align-items: center;
  color: ${primitives.colors.base.white};
  
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

const Tabs = styled('div')`
  display: flex;
  gap: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: ${primitives.colors.base.white};
`;

const TabDivider = styled('div')`
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
  height: 1px;
  background: ${primitives.colors.base.white};
  margin-top: 8px;
`;

const ContentContainer = styled('div')`
  background-color: ${primitives.colors.neutral[800]};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = styled('div')`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
`;

const MessageBubble = styled('div')<{ $isHuman: boolean }>`
  padding: 12px 16px;
  border-radius: 8px;
  max-width: 85%;
  word-wrap: break-word;
  align-self: ${props => props.$isHuman ? 'flex-end' : 'flex-start'};
  color: ${props => props.$isHuman ? primitives.colors.base.white : primitives.colors.brand[300]};
  font-size: 16px;
  line-height: 1.5;
`;

const CardWrapper = styled('div')`
  width: 100%;
  margin: 8px 0;
`;

const InputContainer = styled('div')`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: ${primitives.colors.neutral[800]};
  border-top: 1px solid ${primitives.colors.neutral[700]};
`;

const ChatInput = styled('div')`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 12px 16px;
  min-height: 24px;
  max-height: 120px;
  overflow-y: auto;
  color: ${primitives.colors.base.white};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  
  &[contenteditable="true"] {
    outline: none;
    
    &:empty:before {
      content: 'Type a message...';
      color: ${primitives.colors.neutral[400]};
    }
  }
`;

export function RightAssistantPanel({ messages, onWidthChange }: RightAssistantPanelProps) {
  const [width, setWidth] = useState(340);
  const [activeTab, setActiveTab] = useState<'activity' | 'assist'>('assist');

  const handleResize = (e: MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth >= 340) {
        setWidth(newWidth);
        onWidthChange(newWidth);
      }
    }
  };

  const startResize = () => {
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', stopResize);
  };

  const stopResize = () => {
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', stopResize);
  };

  const renderMessage = (message: Message, index: number) => {
    if (message.type === 'thinking') {
      return <ThinkingMessage key={index} />;
    }
    
    if (message.type === 'payroll-card') {
      return (
        <CardWrapper key={index}>
          <PayrollInfoCard
            title={message.title}
            variable={message.variable}
            explanation={message.explanation}
          />
        </CardWrapper>
      );
    }

    return (
      <MessageBubble
        key={index}
        $isHuman={message.sender === 'human'}
      >
        {message.content}
      </MessageBubble>
    );
  };

  return (
    <Wrapper style={{ width: `${width}px` }}>
      <ResizeHandle onMouseDown={startResize} />
      <ContentContainer>
        <TabsContainer>
          <IconWrapper>
            <AutoAwesomeIcon />
          </IconWrapper>
          <Tabs>
            <div 
              style={{ opacity: activeTab === 'activity' ? 1 : 0.6, cursor: 'pointer' }}
              onClick={() => setActiveTab('activity')}
            >
              Activity
            </div>
            <div 
              style={{ opacity: activeTab === 'assist' ? 1 : 0.6, cursor: 'pointer' }}
              onClick={() => setActiveTab('assist')}
            >
              Assist
            </div>
          </Tabs>
          <TabDivider />
        </TabsContainer>
        <MessagesContainer>
          {messages.map((message, index) => renderMessage(message, index))}
        </MessagesContainer>
        <InputContainer>
          <ChatInput
            contentEditable
            role="textbox"
            aria-multiline="true"
            aria-label="Chat message"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                // Handle send message
              }
            }}
          />
        </InputContainer>
      </ContentContainer>
    </Wrapper>
  );
}

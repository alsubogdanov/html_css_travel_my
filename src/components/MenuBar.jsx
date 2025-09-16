import { useState } from 'react';
import { Button, TextInput, Group } from '@mantine/core';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import CommentsWithReplay from './CommentsWithReplay';
import Hero from './Hero';

function MenuBar({ editor }) {
  if (!editor) return null;

  return (
    <Group spacing='xs' mb='sm'>
      <Button
        variant={editor.isActive('bold') ? 'filled' : 'outline'}
        onClick={() => editor.chain().focus().toggleBold().run()}>
        B
      </Button>
      <Button
        variant={editor.isActive('italic') ? 'filled' : 'outline'}
        onClick={() => editor.chain().focus().toggleItalic().run()}>
        I
      </Button>
      <Button
        variant={editor.isActive('underline') ? 'filled' : 'outline'}
        onClick={() => editor.chain().focus().toggleUnderline().run()}>
        U
      </Button>
      <Button
        variant={editor.isActive('heading', { level: 1 }) ? 'filled' : 'outline'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
        H1
      </Button>
      <Button
        variant={editor.isActive('heading', { level: 2 }) ? 'filled' : 'outline'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        H2
      </Button>
      <Button
        variant={editor.isActive('bulletList') ? 'filled' : 'outline'}
        onClick={() => editor.chain().focus().toggleBulletList().run()}>
        • List
      </Button>
      <Button
        variant={editor.isActive('orderedList') ? 'filled' : 'outline'}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        1. List
      </Button>
    </Group>
  );
}

export default MenuBar;

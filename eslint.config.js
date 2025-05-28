import js from '@eslint/js'
import json from '@eslint/json'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const languageOptions = { globals: { ...globals.browser, ...globals.node } }
const files = ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']

export default defineConfig([
	{
		ignores: ['**/.git/**', '**/node_modules/**', '**/dist/**', '**/build/**']
	},
	{ 
		files, plugins: { js }, extends: ['js/recommended'] 
	},
	{ 
		files, languageOptions 
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc', extends: ['json/recommended']
	},
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'quotes': ['error', 'single'],
			'indent': ['error', 'tab', { 'SwitchCase': 1 }],
			'semi': ['error', 'never'],
			'no-undef': 'warn',
			'max-len': ['error', { code: 120 }]
		}
	}
])

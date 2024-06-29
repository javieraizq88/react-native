# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



# npm i zustand
zustand => para no instalar redux, contextAPI etc


# npm i axios



# npm install react-hook-form
React Hook Form
https://react-hook-form.com/


# En interfaces
1.- crear request response -> reqres.interface.ts
2.- shift + command + p
3.- en el buscador escribir paste JSON as code
4.- En el clip board tiene guardada el JSON se le puede poner cualquier nombre y va a crear una interfaz con esa info




### extension
paste JSON as Code




######
###### REACT NAVITE ######
######


## instalas Android Studio ##

1) en https://reactnative.dev/docs/set-up-your-environment?platform=android seleccionar MacOS ---> Android
  1) instalar homebrew
  # /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  anotar la password y enter
  2) version de node actualizada
  3) # brew install watchman

2) Java Development Kit
  1) # brew install --cask zulu@17
  2) # brew info --cask zulu@17
  3) en el archivo .zxhrc ( Users/javiera.izquierdo/.zshrc ) agregar la ubicacion del home de java
  # export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home


3) descargar Android studio, instalarlo y arbrirlo
  1) # More Actions -> SDK Manager -> Show Package details
  2) confirmar que este seleccionada la ultima version de # Android API 35
  3) select Google APIs ARM 64 vBa System Image ---> Apply ---> acept
  4) # More Actions -> SDK Manager -> SDK tools -> Show Package details -> Andriod SDK Command-line Tools (latest) -> apply -> ok
  5) en el archivo .zxhrc ( Users/javiera.izquierdo/.zshrc )agregar 
    # export ANDROID_HOME=/Users/javiera.izquierdo/Library/Android/sdk
    # export PATH=$PATH:$ANDROID_HOME/emulator
    # export PATH=$PATH:$ANDROID_HOME/platform-tools


4) desinstalar versiones anteoriores de react-native-cli para evitar errores
# sudo npm uninstall -g react-native-cli @react-native-coomunity/cli


5) crear proyecto
  # npx react-native@latest init AwesomeProject

6) para solucionar posibles errores de instalacion
  # npx react-native doctor  ---> f

7) abrir Android Studio -> Device Manager -> select system image (pixel XL) -> seleccionar API 35
-> Next -> Graphics: Hardware -> show advanced settings -> RAM 3 GB , Internal Storage 4 GB -> FINISH
  1) Seleccionar el emulador y darle play

8) # npm start -> a 
 en la carpeta del proyecto
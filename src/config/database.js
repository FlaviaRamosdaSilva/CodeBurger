//sequelaze-cli não entende import e export, precisamos fazer na sintaxe antiga

export const dialect = 'postgres';
export const url = 'postgresql://postgres:Ea*F5feD643E-4B2BfB6F5G6ad1eGG4d@monorail.proxy.rlwy.net:25535/railway';
export const define = {
    timestamps: true, // ele adiciona automaticamente nas informações a data do created_at e do updated_at que registra a data criada e a data da última atualização
    underscored: true, // as duas configurações são para que ele não utilize o camelCase para nomes e que seja tudo em caixa baixa e separados por underline
    underscoredAll: true // explicação acima
};
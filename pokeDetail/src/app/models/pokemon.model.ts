export class Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    // Adicione outros campos conforme necessário
  
    constructor(data: any) {
      this.id = data.id;
      this.name = data.name;
      this.height = data.height;
      this.weight = data.weight;
      // Inicialize outros campos conforme necessário
    }
  }
  
class CustomShape {
    constructor(color, textColor, textContent) {
      this.color = color;
      this.textColor = textColor;
      this.textContent = textContent;
    }
  }
  
  class CustomTriangle extends CustomShape {
    constructor(color, textColor, textContent) {
      super(color, textColor, textContent);
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <!-- Background -->
    <polygon points="200,20 360,280 40,280" fill="${this.color}"/>
    <!-- Text -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="64" font-family="Arial">${this.textContent}</text>
  </svg>
  `;
    }
  }
  
  class CustomCircle extends CustomShape {
      constructor(color, textColor, textContent) {
        super(color, textColor, textContent);
      }
    
      render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <!-- Background -->
      <circle cx="200" cy="150" r="135" fill="${this.color}"/>
      <!-- Text -->
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="64" font-family="Arial">${this.textContent}</text>
    </svg>
    `;
      }
  }
  
  class CustomSquare extends CustomShape {
    constructor(color, textColor, textContent) {
      super(color, textColor, textContent);
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <!-- Background -->
    <rect x="50" y="50" width="300" height="300" fill="${this.color}"/>
    <!-- Text -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="64" font-family="Arial">${this.textContent}</text>
  </svg>
  `;
    }
  }
  
  module.exports = { CustomShape, CustomCircle, CustomTriangle, CustomSquare };
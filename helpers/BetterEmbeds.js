module.exports = class BetterEmbed {
  constructor(props) {
    this.title = props ? props.title : "";
    this.url = props ? props.url : "";
    this.description = props ? props.description : "";
    this.author = props ? props.author : "";
    this.author_icon = props ? props.author_icon : "";
    this.author_url = props ? props.author_url : "";
    this.image = props ? props.image : "";
    this.thumbnail = props ? props.thumbnail : "";
    this.footer = props ? props.footer : "LogsBot | By ShadowV#9339";
    this.footer_icon = props ? props.footer_icon : "https://cdn.discordapp.com/avatars/674568147029983242/4674f96376e052825c4ffa0994720a6c.png";
    this.timestamp = props ? props.timestamp : Date.now();
    this.color = props ? props.color : "#00abf5";
    this.fields = props ? props.fields : [];
    this.files = props ? props.files : [];
  }
  attachFiles(value) {
    this.files = this.files.concat(value);
    return this;
  }
  setTitle(value) {
    this.title = value;
    return this;
  }

  setDescription(value) {
    this.description = value;
    return this;
  }
  setAuthor(value, icon, url) {
    this.author = value;
    this.author_icon = icon;
    this.author_url = url;
    return this;
  }

  setImage(value) {
    this.image = value;
    return this;
  }
  setThumbnail(value) {
    this.thumbnail = value;
    return this;
  }
  setFooter(value, icon) {
    this.footer = value;
    this.footer_icon = icon;
    return this;
  }
  setTimestamp(value) {
    this.timestamp = value;
    return this;
  }
  setColor(value) {
    this.color = value;
    return this;
  }
  setUrl(value) {
    this.url = value;
    return this;
  }
  addField(name, value, inline = false) {
    this.fields.push({
      name: name,
      value: value,
      inline: inline
    });
    return this;
  }
  addBlankField(inline = false) {
    this.fields.push({
      name: "\u200B",
      value: "\u200B",
      inline: inline
    });
    return this;
  }
  build() {
    return {
      title: this.title ? this.title : undefined,
      files: this.files ? this.files : undefined,
      url: this.url ? this.url : undefined,
      description: this.description ? this.description : undefined,
      author: {
        name: this.author,
        icon_url: this.author_icon ? this.author_icon : undefined,
        url: this.author_url ? this.author_url : undefined
      },
      image: {
        url: this.image
      },
      thumbnail: {
        url: this.thumbnail
      },
      footer: {
        text: this.footer,
        icon_url: this.footer_icon ? this.footer_icon : undefined
      },
      timestamp: this.timestamp ? this.timestamp : undefined,
      color: this.color ? this.color : undefined,
      fields: this.fields ? this.fields : undefined
    };
  }
};

export default class Project {
	public id: number;
	public name: string;
	public tags: string[];
	public date: string;
	public society: string;
	public colors: string[];
	public image: string;
	public slug: string;

	constructor (data: any) {
		this.id = data.id;
		this.name = data.name;
		this.tags = data.tags;
		this.date = data.date;
		this.society = data.society;
		this.colors = data.colors;
		this.image = data.image;
		this.slug = data.slug;
	}
}

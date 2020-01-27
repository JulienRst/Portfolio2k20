export default class Project {
	public id: number;
	public name: string;
	public tags: string[];
	public date: string;
	public society: string;
	public slug: string;
	public descriptions: string[];
	public challenges: string[];

	constructor (data: any) {
		this.id = data.id;
		this.name = data.name;
		this.tags = data.tags;
		this.date = data.date;
		this.society = data.society;
		this.slug = data.slug;
		this.descriptions = data.description;
		this.challenges = data.challenges;
	}
}

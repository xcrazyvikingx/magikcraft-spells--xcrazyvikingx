const magik = magikcraft.io;

function recall(name) {
	const there = magik.memento.getItem(name);
    magik.dixit(there.toString());
}

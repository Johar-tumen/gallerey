import "../../css/members.scss";
import { membersBlock } from "./blocks";

export default function Members() {
    const membersTable = membersBlock.find("#members-table");

    const membersData = [
        { name: "Harry Potter", description: " Quia sunt consequatur voluptatum fuga magnam adipisci." },
        { name: "Hermiona Granger", description: "Sint aspernatur molestias nisi ab provident eos ad suscipit ipsa!" },
        { name: "Ron Wisley", description: "Sint aspernatur molestias nisi ab provident eos ad suscipit ipsa!" },
        { name: "Nevil Dolgopups", description: "Sint aspernatur molestias nisi ab provident eos ad suscipit ipsa!" }
    ]

    const createMember = (member) => `
        <div class="member-card">
            <div class="avatar">
                <div></div>
            </div>
            <div class="controls">
                <button class="btn btn-primary">add</button>
                <button class="btn btn-error">remove</button>
            </div>
            <div class="description">
                <h3>
                    ${member.name}
                </h3>
                <p>${member.description}</p>
            </div>
        </div>
    `

    function renderMembers() {
        membersData.map((member) => {
            const prepareHtml = membersTable.html() + createMember(member);
            membersTable.html(prepareHtml);
        })
    }

    renderMembers();
}